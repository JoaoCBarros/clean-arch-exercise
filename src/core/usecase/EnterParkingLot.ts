import ParkedCar from "../entity/ParkedCar";
import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class EnterParkingLot {
  constructor(private readonly parkingLotRepository: ParkingLotRepository) {}

  async execute(code: string, plate: string, date: Date) {
    if (!/[A-Z]{3}-[0-9]{4}/.test(plate)) throw new Error("Invalid plate");
    const parkingLot = await this.parkingLotRepository.getParkingLot(code);
    const parkedCar = new ParkedCar(code, plate, date);

    if (!parkingLot.isOpen(parkedCar.date))
      throw Error("The parking lot is closed");
    if (parkingLot.isFull()) throw Error("The parking lot is full");

    await this.parkingLotRepository.saveParkedCar(
      parkedCar.code,
      parkedCar.plate,
      parkedCar.date
    );
    return parkingLot;
  }
}
