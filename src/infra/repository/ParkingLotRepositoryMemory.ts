import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";

export default class ParkingLotRepositoryMemory
  implements ParkingLotRepository
{
  parkingLots = [new ParkingLot("shopping", 5, 8, 23)];

  parkedCars = [];
  saveParkedCar(code: string, plate: string, date: Date): void {
    this.parkedCars.push({
      code,
      plate,
      date,
    });
  }
  async getParkingLot(code: string): Promise<ParkingLot> {
    const parkingLot = await Promise.resolve(
      this.parkingLots.find((parkingLot) => parkingLot.code === code)
    );
    parkingLot.ocuppiedSpaces = this.parkedCars.length;
    return parkingLot;
  }
}
