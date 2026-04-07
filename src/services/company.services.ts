import { CompanyRepository } from "../repositories/company.repositories";
export class CompanyService {
  private repo = new CompanyRepository();

  createCompany(companyName: string, companyEmail: string) {
    return this.repo.createCompany(companyName, companyEmail);
  }

  getCompanys() {
    return this.repo.getCompanys();
  }
  updateCompany(id: string, companyName: string, companyEmail: string) {
    return this.repo.updateCompany(id, companyName, companyEmail);
  }

  deleteCompany(id: string) {
    return this.repo.deleteCompany(id);
  }
}
