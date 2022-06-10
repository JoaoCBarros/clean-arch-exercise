import { makeParkingLotController } from "../src/app/core/factory/ParkingLotControllerFactory";

describe("GetParkingLot", () => {
  it("Should get the parking lot by code", async () => {
    const parkingLotController = makeParkingLotController();
    const parkingLot = await parkingLotController.show(
      { code: "shopping" },
      {}
    );

    expect(parkingLot.code).toBe("shopping");
  });
});
