import express from "express";
import 'dotenv/config';
import router from "./router";
import { connectDB } from "./config/db";

const app = express();

connectDB();

// Middleware to parse JSON bodies (to read json data sent in requests)
app.use(express.json());

// Use the router
app.use("/", router);

export default app;