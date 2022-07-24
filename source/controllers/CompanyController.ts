import { Request, Response, NextFunction } from "express"
import DB from "../DB"
import { Company } from "../entities/company"
import { CompanyRepository } from "../repositories/CompanyRepository"

const getAllCompany = async (req: Request, res: Response<Company[]>, next: NextFunction) => {
  const db = await DB.getConnection()
  const companyRepository = new CompanyRepository(db)
  // get some posts
  let companies: Company[] = await companyRepository.find({})
  return res.status(200).json(companies)
}


export default { getAllCompany }
