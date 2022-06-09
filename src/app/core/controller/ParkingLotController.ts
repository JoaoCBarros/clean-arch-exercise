import ParkingLotRepositoryMemory from "../../../infra/repository/ParkingLotRepositoryMemory";
import GetParkingLot from "../useCase/GetParkingLot";

export default class ParkingLotController {
  static async getParkingLot(params, body) {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
    return await getParkingLot.execute(params.code);
  }
}
