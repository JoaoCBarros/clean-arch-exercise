import ParkedCar from "../entity/ParkedCar";
import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class EnterParkingLot {
  constructor(private readonly parkingLotRepository: ParkingLotRepository) {}
  async execute(code: string, plate: string, date: Date) {
    const parkedCar = new ParkedCar(code, plate, date);
    await this.parkingLotRepository.saveParkedCar(
      parkedCar.code,
      parkedCar.plate,
      parkedCar.date
    );
  }
}
