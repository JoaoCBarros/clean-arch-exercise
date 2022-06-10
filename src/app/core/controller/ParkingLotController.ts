import ParkingLotRepositoryMemory from "../../../infra/repository/ParkingLotRepositoryMemory";
import GetParkingLot from "../useCase/GetParkingLot";

export default class ParkingLotController {
  constructor(
    private readonly getParkingLot: GetParkingLot,
    private test: string
  ) {}
  async show(params, body) {
    return await this.getParkingLot.execute(params.code);
  }
}
