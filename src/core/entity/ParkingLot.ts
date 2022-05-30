export default class ParkingLot {
  capacity: number;
  closeHour: number;
  code: string;
  openHour: number;
  ocuppiedSpaces: number;
  constructor(
    code: string,
    capacity: number,
    openHour: number,
    closeHour: number
  ) {
    this.code = code;
    this.capacity = capacity;
    this.openHour = openHour;
    this.closeHour = closeHour;
  }

  isOpen(date: Date) {
    const hour = date.getHours();
    return hour >= this.openHour && hour < this.closeHour;
  }
}
