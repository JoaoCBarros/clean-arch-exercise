import ParkingLot from "../src/core/entity/ParkingLot";
import EnterParkingLot from "../src/core/usecase/EnterParkingLot";
import GetParkingLot from "../src/core/usecase/GetParkingLot";
import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemory";

test("should enter parking lot", async function () {
  const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
  const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
  const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
  const getParkingLotBeforeEnter = await getParkingLot.execute("shopping");
  expect(getParkingLotBeforeEnter.ocuppiedSpaces).toBe(0);
  await enterParkingLot.execute(
    "shopping",
    "ABC-1234",
    new Date("2022-05-29T10:00:00")
  );
  const getParkingLotAfterEnter = await getParkingLot.execute("shopping");
  expect(getParkingLotBeforeEnter.ocuppiedSpaces).toBe(1);
});

// test("should give error in plate", async function () {
//   const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
//   const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
//   try {
//     const parkingLot = await enterParkingLot.execute(
//       "shopping",
//       "ABCE-12345",
//       new Date()
//     );
//   } catch (error) {
//     // expect(parkingLot).toThrowError("Invalid plate");
//     console.log("Entrou");
//   }
// });
