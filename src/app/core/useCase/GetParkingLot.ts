import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class GetParkingLot {
  constructor(private readonly parkingLotRepository: ParkingLotRepository) {}
  async execute(code: string) {
    const parkingLot = await this.parkingLotRepository.getParkingLot(code);
    return parkingLot;
  }
}
