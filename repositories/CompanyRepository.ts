import { BaseRepository } from "./base/BaseRepository";
import { Company } from "../entities/company";
export class CompanyRepository extends BaseRepository<Company> {
    countOfCompany(): Promise<number> {
        return this._collection.count({})
    }
}
