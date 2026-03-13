import express from "express";
import cors from "cors";
import 'dotenv/config';
import router from "./router";
import { connectDB } from "./config/db";
import { corsOptions } from "./config/cors";
connectDB();

const app = express();

// cors
app.use(cors(corsOptions));

// Middleware to parse JSON bodies (to read json data sent in requests)
app.use(express.json());

// Use the router
app.use("/", router);

export default app;