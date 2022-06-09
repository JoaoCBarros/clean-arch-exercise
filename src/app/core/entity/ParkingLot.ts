export default class ParkingLot {
  code: string;
  openHour: number;
  closeHour: number;
  occupationSpaces: number;
  constructor(code: string, openHour: number, closeHour: number) {
    this.code = code;
    this.openHour = openHour;
    this.closeHour = closeHour;
    this.occupationSpaces = 0;
  }
}
