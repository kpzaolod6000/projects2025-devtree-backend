import type { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import slug from "slug";
import User from "../models/User";
import { checkPassword, hashPassword } from "../utils/auth";

export const createAccount = async (req: Request, res: Response) => {

    const { email } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        const error = new Error('User already exists');
        return res.status(409).json({ error: error.message });
    }

    const handle = slug(req.body.handle);
    const handleExists = await User.findOne({ handle });
    if (handleExists) {
        const error = new Error('Handle already exists');
        return res.status(409).json({ error: error.message });
    }

    const user = new User(req.body);
    user.password = await hashPassword(user.password);
    user.handle = handle;

    await user.save();
    res.status(201).send(user);
}

export const login = async (req: Request, res: Response) => {

    // Validate request
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // check if user exists
    const {email, password} = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        const error = new Error('The user does not exist');
        return res.status(401).json({ error: error.message });
    }

    //check if password is correct
    const isPasswordValid = await checkPassword(password, user.password);
    if (!isPasswordValid) {
        const error = new Error('The password is incorrect');
        return res.status(401).json({ error: error.message });
    }

    res.send("Authenticated successfully");
}