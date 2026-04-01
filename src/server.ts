import express from "express";
import { connectDB, sequelize } from "./config/databases";
import userRoutes from "./routes/user.routes";
import path from "path";


const app = express();
app.use(express.json());

// Connect to DB
connectDB();

// Sync models (creates tables automatically)
sequelize.sync({ alter: true }).then(() => {
  console.log("✅ All models synchronized with DB");
});

// Routes
app.use("/api", userRoutes);
app.use(express.static("public"));
app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
