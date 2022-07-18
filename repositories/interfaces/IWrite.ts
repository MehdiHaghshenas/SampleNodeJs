export interface IWrite<T, TKey> {
    create(item: T): Promise<TKey>;
    update(id: TKey, item: T): Promise<boolean>;
    delete(id: TKey): Promise<boolean>;
}
