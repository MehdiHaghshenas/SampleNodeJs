import { ObjectID } from "bson"
import { Request, Response, NextFunction } from "express"
import { Db } from "mongodb"
import DB from "../DB"
import { Company } from "../entities/company"
import { CompanyRepository } from "../repositories/CompanyRepository"

DB.getConnection().then(v => {
  companyRepository = new CompanyRepository(v)
})
let companyRepository: CompanyRepository
const getAllCompany = async (req: Request, res: Response<Company[]>, next: NextFunction) => {
  // const db = await DB.getConnection()
  // get some posts
  let companies: Company[] = await companyRepository.find({})
  /*
  #swagger.responses[200] = {
            description: "Some description... OpenAPI 3.x",
            content: {
                "application/json": {
                    schema:{
                        $ref: "#/definitions/User"
                    }
                }           
            }
        }   
   */
  return res.status(200).json(companies)
}
const getCompany = async (req: Request, res: Response<Company| null>, next: NextFunction) => {
  if (ObjectID.isValid(req.params.id)) {
    const objid = new ObjectID(req.params.id)
    let company =await companyRepository.findOne(objid)
    return res.status(200).json(company)
  }
  else
  {
    return res.status(400).json()
  }
}


export default { getAllCompany, getCompany }
