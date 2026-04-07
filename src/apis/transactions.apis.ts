import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { Company } from "../models/company";
import { User } from "../models/user";

const router = express.Router();

// Interface for request body
interface TransactionBody {
  user?: {
    name?: string;
    email?: string;
  };
  company?: {
    companyName?: string;
    companyEmail?: string;
  };
}

// POST /api/create-user-company
router.post(
  "/create-user-company",
  async (req: Request<{}, {}, TransactionBody>, res: Response) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      const { user, company } = req.body;

      // ----------------------
      // 1️⃣ Validate input
      // ----------------------
      const errors: string[] = [];

      if (!user) errors.push("User data is missing.");
      else {
        if (!user.name) errors.push("User name is required.");
        if (!user.email) errors.push("User email is required.");
      }

      if (!company) errors.push("Company data is missing.");
      else {
        if (!company.companyName) errors.push("Company name is required.");
        if (!company.companyEmail) errors.push("Company email is required.");
      }

      if (errors.length > 0) {
        throw new Error(errors.join(" "));
      }

      // ----------------------
      // 2️⃣ Create documents in a transaction
      // ----------------------
      const newUser = await User.create([user!], { session });
      const newCompany = await Company.create([company!], { session });

      // ----------------------
      // 3️⃣ Commit transaction
      // ----------------------
      await session.commitTransaction();
      session.endSession();

      res.status(201).json({
        message: "Transaction successful ✅",
        user: newUser[0],
        company: newCompany[0],
      });
    } catch (error: any) {
      // ----------------------
      // 4️⃣ Rollback on error
      // ----------------------
      await session.abortTransaction();
      session.endSession();

      res.status(400).json({
        message: "Transaction failed ❌",
        error: error.message,
      });
    }
  },
);

export default router;
