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
    closeHour: number,
    ocuppiedSpaces: number
  ) {
    this.code = code;
    this.capacity = capacity;
    this.openHour = openHour;
    this.closeHour = closeHour;
    this.ocuppiedSpaces = ocuppiedSpaces;
  }

  isOpen(date: Date) {
    const hour = date.getHours();
    return hour >= this.openHour && hour < this.closeHour;
  }

  isFull() {
    return this.capacity === this.ocuppiedSpaces;
  }
}
