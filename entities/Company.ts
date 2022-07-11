import { ObjectID } from "bson";

export class Company {
  _id: ObjectID;
  private name: string;
  private year: number;

  constructor(name: string, year: number) {
    this.name = name;
    this.year = year;
    this._id = new ObjectID()
  }
}
