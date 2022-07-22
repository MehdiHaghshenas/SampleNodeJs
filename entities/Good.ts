export class Good {
  _id: number;
  Name: string;
  ExistNumber: number;

  /**
   *
   */
  constructor(id: number, name: string, existNumber: number) {
    this._id = id;
    this.Name = name;
    this.ExistNumber = existNumber;
  }
}
