import { IRead } from "../interfaces/IRead";
import { IWrite } from "../interfaces/IWrite";
import { Db, Collection, InsertOneResult } from 'mongodb'
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T>{
    public readonly _collection: Collection;
    constructor(db: Db, collectionName: string) {
        this._collection = db.collection(collectionName);
    }
    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
    async create(item: T): Promise<boolean> {
        const result: InsertOneResult = await this._collection.insertOne(item);
        return !!result.acknowledged;
    }
    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
