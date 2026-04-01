import dotenv from "dotenv";
dotenv.config(); // <-- MUST be called before using process.env

import { Sequelize } from "sequelize";

console.log("DB_PASSWORD:", process.env.DB_PASSWORD);

export const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    dialect: "mysql",
    logging: console.log,
  },
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected");
  } catch (error) {
    console.error("❌ DB connection error:", error);
  }
};
