// importing mongoClient to connect at mongodb
import { MongoClient } from 'mongodb';

import { Company } from './entities/company';
import { CompanyRepository } from './repositories/CompanyRepository';

// creating a function that execute self runs
(async () => {
    // connecting at mongoClient
    const connection = await MongoClient.connect('mongodb://root:A1b2c3d4@localhost:27017/TestMAction?authSource=admin&readPreference=primary&ssl=false');
    const db = connection.db('TestMAction');

    // our operations
    const company = new Company('Borna', 2020);

    // initializing the repository
    const repository = new CompanyRepository(db, 'Company');

    const result = await repository.create(company);
    console.log(`company inserted with ${result ? 'success' : 'fail'}`)

    const count = await repository.countOfCompany();
    console.log(`the count of comapny is ${count}`)
})();