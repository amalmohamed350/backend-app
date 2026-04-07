import express from "express";
import { connectDB } from "./config/db";
import userApis from "./apis/user.apis";
import companyApis from "./apis/company.apis";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());


// Register routes
app.use("/api/users", userApis); // <-- attach the routes
app.use("/api/company", companyApis); // <-- attach the routes

// Start server after connecting to DB  
connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
