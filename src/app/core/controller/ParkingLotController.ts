import EnterParkingLot from "../useCase/EnterParkingLot";
import GetParkingLot from "../useCase/GetParkingLot";
import LeaveParkingLot from "../useCase/LeaveParkingLot";

export default class ParkingLotController {
  constructor(
    private readonly getParkingLot: GetParkingLot,
    private readonly leaveParkingLot: LeaveParkingLot,
    private readonly enterParkingLot: EnterParkingLot
  ) {}
  async show(params, body) {
    return await this.getParkingLot.execute(params.code);
  }

  async leaveCar(params, body) {
    return await this.leaveParkingLot.execute(params.code, params.plate);
  }

  async enterCar(params, body) {
    return await this.enterParkingLot.execute(
      params.code,
      params.plate,
      new Date("2022-06-10T15:00:00")
    );
  }
}
