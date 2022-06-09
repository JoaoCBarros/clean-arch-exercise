import ParkingLotAdapter from "../src/app/core/adapter/ParkingLotAdapter";
import EnterParkingLot from "../src/app/core/useCase/EnterParkingLot";
import GetParkingLot from "../src/app/core/useCase/GetParkingLot";
import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemory";

describe("EnterParkingLot", () => {
  it("Should enter one parked car", async () => {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
    const parkingLotBeforeEnterCar = await getParkingLot.execute("shopping");
    expect(parkingLotBeforeEnterCar.occupationSpaces).toBe(0);
    enterParkingLot.execute(
      "shopping",
      "ABV-0009",
      new Date("2022-06-08T10:00:00")
    );

    const parkingLotAfterEnterCar = await getParkingLot.execute("shopping");
    expect(parkingLotAfterEnterCar.occupationSpaces).toBe(1);
  });

  // it("Should not enter parked parking lot because wrong date", async () => {
  //   const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
  //   const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);

  //   expect(
  //     enterParkingLot.execute(
  //       "shopping",
  //       "ABV-0009",
  //       new Date("2022-06-08T23:00:00")
  //     )
  //   ).toThrowError("PARKING LOT CLOSED");
  // });
});
