import ParkingLot from "../entity/ParkingLot";

export default class ParkingLotAdapter {
  static create(
    code: string,
    openHour: number,
    closeHour: number,
    occupationSpaces: number
  ): ParkingLot {
    return {
      code,
      openHour,
      closeHour,
      occupationSpaces,
    };
  }
}
