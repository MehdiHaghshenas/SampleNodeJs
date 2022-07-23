import { BaseRepository } from "./base/BaseRepository"
import { Company } from "../entities/company"
import { Db, ObjectId } from "mongodb"
export class CompanyRepository extends BaseRepository<Company, ObjectId> {
  /**
   *
   */
  constructor(db: Db) {
    super(db,"Company");
    
  }
  countOfCompany(): Promise<number> {
    return this._collection.count({})
  }
}
