import { Company } from "../models/company";


export class companyRepository {
  async createCompany(name: string, industry: string, session: any) {
    return Company.create([{ companyName: name, companyEmail: industry }], { session });
  }
}

export class CompanyRepository {
  async createCompany(companyName: string, companyEmail: string) {
    return Company.create({ companyName, companyEmail });
  }

  async getCompanys() {
    return Company.find();
  }

  async deleteCompany(id: string) {
    return Company.findByIdAndDelete(id);
  }

  async updateCompany(id: string, companyName: string, companyEmail: string) {
    return Company.findByIdAndUpdate(id, { companyName, companyEmail }, { new: true });
  }
}
