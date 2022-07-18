export interface IWrite<T, TKey> {
    create(item: T): Promise<TKey | null>;
    update(id: TKey, item: T): Promise<boolean>;
    delete(id: TKey): Promise<boolean>;
}
