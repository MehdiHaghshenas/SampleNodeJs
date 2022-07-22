import { BaseRepository } from "./base/BaseRepository";
import { Company } from "../entities/company";
import { ObjectId } from "mongodb";
export class CompanyRepository extends BaseRepository<Company, ObjectId> {
  countOfCompany(): Promise<number> {
    return this._collection.count({});
  }
}
