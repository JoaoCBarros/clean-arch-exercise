import ParkingLot from "../src/core/entity/ParkingLot";
import EnterParkingLot from "../src/core/usecase/EnterParkingLot";
import GetParkingLot from "../src/core/usecase/GetParkingLot";
import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemory";

describe("EnterParkingLot", () => {
  it("should enter one vehicle in parking lot", async () => {
    const parkintLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(parkintLotRepositoryMemory);
    const getParkingLot = new GetParkingLot(parkintLotRepositoryMemory);
    const parkingLotBeforeEnterVehicle = await getParkingLot.execute(
      "shopping"
    );
    expect(parkingLotBeforeEnterVehicle.ocuppiedSpaces).toBe(0);

    await enterParkingLot.execute(
      "shopping",
      "ABC-0012",
      new Date("2022-06-04T14:00:00")
    );
    const parkingLotAfterEnterVehicle = await getParkingLot.execute("shopping");
    expect(parkingLotAfterEnterVehicle.ocuppiedSpaces).toBe(1);
  });
});
