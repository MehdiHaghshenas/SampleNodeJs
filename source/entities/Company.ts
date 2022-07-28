import { ObjectID } from "bson"

export class Company {
  _id: ObjectID
  Name: string
  Year: number

  constructor(name: string, year: number) {
    this.Name = name
    this.Year = year
    this._id = new ObjectID()
  }
}
