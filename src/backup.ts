import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000', // Adjust as needed
    credentials: true // Allow cookies to be sent in requests
}));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/new", (req, res) => {
    res.send("Hello World new!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});