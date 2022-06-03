import GetParkingLot from "../core/usecase/GetParkingLot";
import ParkingLotRepositoryPostgres from "../infra/repository/ParkingLotRepositoryPostgres";

export default class ParkingLotController {
  static async getParkingLot(params, body) {
    const parkingLotRepositoryPostgres = new ParkingLotRepositoryPostgres();
    const getParkingLot = new GetParkingLot(parkingLotRepositoryPostgres);
    const parkingLot = await getParkingLot.execute(params.code);

    return parkingLot;
  }
}
