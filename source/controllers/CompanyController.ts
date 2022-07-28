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
            description: "return list of company",
            content: {
                "application/json": {
                    '@schema': {
                      name: 'Jhon Doe',
                        age: 29,
                        about: ''           
                    }
                }           
            }
        }   
   */
  return res.status(200).json(companies)
}
const getCompany = async (req: Request, res: Response<Company | null>, next: NextFunction) => {
  /* #swagger.responses[200] = {
     description: "Some description... OpenAPI 3.x",
     "content": {
         "application/json": {
            'schema': {
              type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '234234234234'
                    },
                    name: {
                      type: 'string',
                      example: 'Mehdi'
                    },
                    year: {
                      type: 'integer',
                      example: 2020
                    }
                  }
                }
         }
       }       
     }
   */
  if (ObjectID.isValid(req.params.id)) {
    const obj = new ObjectID(req.params.id)
    let company = await companyRepository.findOne(obj)
    return res.status(200).json(company)
  }
  else {
    return res.status(400).json()
  }
}


export default { getAllCompany, getCompany }
