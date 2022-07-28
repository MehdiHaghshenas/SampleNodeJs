import { Db, MongoClient } from "mongodb"

export default class DB {
    private static _connection: MongoClient
    public static _initialize() {
        console.log("ssss")
        MongoClient.connect(
            "mongodb://root:A1b2c3d4@localhost:27017/TestMAction?authSource=admin&readPreference=primary&ssl=false"
        )
        .then(v => {
            console.log("hhhhh")
            DB._connection = v
        })
    }
    static getConnectionSync(): Db {
        console.log(DB._connection)

        return DB._connection.db("TestMAction")
    }
    static async getConnection(): Promise<Db> {
        const conn = await MongoClient.connect(
            "mongodb://root:A1b2c3d4@localhost:27017/TestMAction?authSource=admin&readPreference=primary&ssl=false"
        )
        return conn.db("TestMAction")
    }
}
DB._initialize()