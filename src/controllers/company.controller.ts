import { Request, Response } from "express";
import { CompanyService } from "../services/company.services";

const companyService: CompanyService = new CompanyService();

export class companyController {
  async create(req: Request, res: Response) {
    const Company = await companyService.createCompany(req.body);
    res.json(Company);
  }

  async getAll(req: Request, res: Response) {
    const Companys = await companyService.getCompanys();
    res.json(Companys);
  }

  async getOne(req: Request, res: Response) {
    const Company = await companyService.getCompanys(Number(req.params.id));
    res.json(Company);
  }
}
