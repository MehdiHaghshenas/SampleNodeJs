import { IRead } from "../interfaces/IRead";
import { IWrite } from "../interfaces/IWrite";
import { Db, Collection, InsertOneResult, OptionalUnlessRequiredId } from 'mongodb'

export abstract class BaseRepository<T, TKey> implements IWrite<T, TKey>, IRead<T, TKey>{
    public readonly _collection: Collection;
    constructor(db: Db, collectionName: string) {
        this._collection = db.collection(collectionName);
    }
    async find(query: any): Promise<T[]> {
        const res = await this._collection.find<T>(query).toArray()
        return res
    }
    async findOne(id: TKey): Promise<T | null> {
        const res = await this._collection.findOne<T>({ _id: id })
        return res
    }
    async create(item: T): Promise<TKey> {
        const result: InsertOneResult<T> = await this._collection.insertOne(item);
        return result.insertedId as unknown as TKey;
    }
    update(id: TKey, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: TKey): Promise<boolean> {
        const res = await this._collection.deleteOne({ _id: id })
        return !!res.deletedCount
    }
}