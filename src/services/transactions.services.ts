import mongoose from "mongoose";
import { companyRepository,  } from "../repositories/company.repositories";
import { userRepository } from "../repositories/user.repositories";

export class TransactionService {
  private userRepo = new userRepository();
  private companyRepo = new companyRepository();

  async createUserAndCompany(
    userData: { name: string; email: string },
    companyData: { name: string; industry: string },
  ) {
    const session = await mongoose.startSession();

    try {
      session.startTransaction();

      // create company first
      const company = await this.companyRepo.createCompany(
        companyData.name,
        companyData.industry,
        session,
      );

      // create user
      const user = await this.userRepo.createUser(
        userData.name,
        userData.email, 
        session,
      );

      // commit if both succeed
      await session.commitTransaction();
      session.endSession();

      return { user, company };
    } catch (error) {
      // rollback
      await session.abortTransaction();
      session.endSession();

      throw error;
    }
  }
}
