import mongoose from "mongoose";
import colors from "colors";
import User, { IUser } from "../models/User";

export const connectDB = async () => {
    try {
        const url = process.env.MONGO_URI || "mongodb+srv://kelvincho6000_db_user:Z4VlpSeDWURsukbk@cluster0.u6pk60n.mongodb.net/devtree";
        const {connection} = await mongoose.connect(url);
        console.log(colors.cyan.bold(`MongoDB connected: ${connection.host}:${connection.port}/${connection.name}`));
    } catch (error) {
        console.error(colors.bgRed.white.bold(`MongoDB connection error: ${error.message}`));
        process.exit(1);
    }
}