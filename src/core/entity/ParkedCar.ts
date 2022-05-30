export default class ParkedCar {
  code: string;
  plate: string;
  date: Date;
  constructor(code: string, plate: string, date: Date) {
    this.code = code;
    this.plate = plate;
    this.date = date;
  }
}
