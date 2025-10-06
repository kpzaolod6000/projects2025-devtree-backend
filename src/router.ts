import { Router } from "express";
import User from "./models/User";

const router = Router();

/** Authentications and Register */
router.post("/auth/register", async (req, res) => {

    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
    // res.send(req.body);
});

export default router;