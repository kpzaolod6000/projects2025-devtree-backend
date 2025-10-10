import { Router } from "express";
import { body } from "express-validator";
import { createAccount } from "./handlers";

const router = Router();

/** Authentications and Register */
router.post(
  "/auth/register",
  body("handle")
    .notEmpty()
    .withMessage("Handle is required"),
  body("name")
    .notEmpty()
    .withMessage("Name is required"),
  body("email")
    .isEmail()
    .withMessage("Email is invalid"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  createAccount
);

export default router;
