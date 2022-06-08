import ParkingLot from "../src/core/entity/ParkingLot";
import EnterParkingLot from "../src/core/usecase/EnterParkingLot";
import GetParkingLot from "../src/core/usecase/GetParkingLot";
import LeaveParkingLot from "../src/core/usecase/LeaveParkingLot";
import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemory";

describe("LeaveParkingLot", () => {
  it("should leave one vehicle in parking lot", async () => {
    const parkintLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(parkintLotRepositoryMemory);
    const leaveParkingLot = new LeaveParkingLot(parkintLotRepositoryMemory);
    const getParkingLot = new GetParkingLot(parkintLotRepositoryMemory);

    await enterParkingLot.execute(
      "shopping",
      "ABC-0012",
      new Date("2022-06-04T14:00:00")
    );
    const parkingLotBeforeLeaveVehicle = await getParkingLot.execute(
      "shopping"
    );
    expect(parkingLotBeforeLeaveVehicle.ocuppiedSpaces).toBe(1);

    await leaveParkingLot.execute("shopping", "ABC-0012");

    const parkingLotAfterLeaveVehicle = await getParkingLot.execute("shopping");
    expect(parkingLotAfterLeaveVehicle.ocuppiedSpaces).toBe(0);
  });
});
