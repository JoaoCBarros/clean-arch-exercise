import ParkingLotRepositoryMemory from "../../../infra/repository/ParkingLotRepositoryMemory";
import ParkingLotController from "../controller/ParkingLotController";
import EnterParkingLot from "../useCase/EnterParkingLot";
import GetParkingLot from "../useCase/GetParkingLot";
import LeaveParkingLot from "../useCase/LeaveParkingLot";

export const makeParkingLotController = (): ParkingLotController => {
  const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
  const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
  const leaveParkingLot = new LeaveParkingLot(parkingLotRepositoryMemory);
  const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
  return new ParkingLotController(
    getParkingLot,
    leaveParkingLot,
    enterParkingLot
  );
};
