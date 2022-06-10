import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class LeaveParkingLot {
  constructor(private readonly parkingLotRepository: ParkingLotRepository) {}

  async execute(code: string, plate: string) {
    await this.parkingLotRepository.leaveParkingLot(code, plate);
  }
}
