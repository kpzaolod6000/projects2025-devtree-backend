import { CorsOptions } from "cors";
export const corsOptions: CorsOptions = {
    origin: function (origin, callback) {
        console.log("Origin:", origin);
        console.log("Allowed Origin:", process.env.ALLOWED_ORIGIN);
        const allowedOrigin = process.env.ALLOWED_ORIGIN || "http://localhost:5173";
        if (origin === allowedOrigin) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    }
};