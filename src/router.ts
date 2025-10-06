import { Router } from "express";
import { createAccount } from "./handlers";

const router = Router();

/** Authentications and Register */
router.post("/auth/register", createAccount);

export default router;