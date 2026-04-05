// src/config/db.ts
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(uri!); // no need for useNewUrlParser/unifiedTopology in Mongoose 7+
    console.log("MongoDB connected!");
  } catch (err) {
    console.error("❌ MongoDB error:", err);
    process.exit(1); // stop server if DB connection fails
  }
};
