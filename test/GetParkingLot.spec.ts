import ParkingLotController from "../src/app/core/controller/ParkingLotController";
import GetParkingLot from "../src/app/core/useCase/GetParkingLot";
import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemory";

describe("GetParkingLot", () => {
  it("Should get the parking lot by code", async () => {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
    const parkingLotController = new ParkingLotController(
      getParkingLot,
      "blue"
    );
    const parkingLot = await parkingLotController.show(
      { code: "shopping" },
      {}
    );

    expect(parkingLot.code).toBe("shopping");
  });
});
