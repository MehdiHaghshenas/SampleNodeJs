import { BaseRepository } from "./base/BaseRepository";
import { Good } from "../entities/Good";
export class GoodsRepository extends BaseRepository<Good, number> {
  counts(): Promise<number> {
    return this._collection.count({});
  }
}
