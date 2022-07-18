export interface IRead<T,TKEY> {
    find(query: any): Promise<T[]>;
    findOne(id: TKEY): Promise<T | null>;
}
