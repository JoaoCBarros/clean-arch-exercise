import EnterParkingLot from "../src/app/core/useCase/EnterParkingLot";
import GetParkingLot from "../src/app/core/useCase/GetParkingLot";
import LeaveParkingLot from "../src/app/core/useCase/LeaveParkingLot";
import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemory";

describe("LeaveParkingLot", () => {
  it("Should leave one parked car", async () => {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const leaveParkingLot = new LeaveParkingLot(parkingLotRepositoryMemory);

    enterParkingLot.execute(
      "shopping",
      "ABC-0001",
      new Date("2022-06-10T13:00:00")
    );

    leaveParkingLot.execute("shopping", "ABC-0001");

    const getParkingLotAfterLeave = await getParkingLot.execute("shopping");
    expect(getParkingLotAfterLeave.occupationSpaces).toBe(0);
  });
});
