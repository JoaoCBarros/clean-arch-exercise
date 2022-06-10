import ParkingLotRepositoryMemory from "../../../infra/repository/ParkingLotRepositoryMemory";
import ParkingLotController from "../controller/ParkingLotController";
import GetParkingLot from "../useCase/GetParkingLot";

export const makeParkingLotController = (): ParkingLotController => {
  const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
  const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
  return new ParkingLotController(getParkingLot, "blue");
};
