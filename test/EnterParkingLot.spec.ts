import ParkingLot from "../src/core/entity/ParkingLot";
import EnterParkingLot from "../src/core/usecase/EnterParkingLot";
import GetParkingLot from "../src/core/usecase/GetParkingLot";
import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemory";
import ParkingLotRepositoryPostgres from "../src/infra/repository/ParkingLotRepositoryPostgres";

test("should get parking lot in repository postgres", async function () {
  const parkingLotRepositoryPostgres = new ParkingLotRepositoryPostgres();
  const getParkingLot = new GetParkingLot(parkingLotRepositoryPostgres);
  const getParkingLotData = await getParkingLot.execute("shopping");
  expect(getParkingLotData.code).toBe("shopping");
});

test("should enter parking lot in repository postgres", async function () {
  const parkingLotRepositoryPostgres = new ParkingLotRepositoryPostgres();
  const enterParkingLot = new EnterParkingLot(parkingLotRepositoryPostgres);
  const getParkingLot = new GetParkingLot(parkingLotRepositoryPostgres);
  const getParkingLotBeforeEnter = await getParkingLot.execute("shopping");
  expect(getParkingLotBeforeEnter.ocuppiedSpaces).toBe(0);
  enterParkingLot.execute(
    "shopping",
    "ABC-0001",
    new Date("2022-05-31T10:00:00")
  );
  const getParkingLotAfterEnter = await getParkingLot.execute("shopping");
  console.log(getParkingLotAfterEnter);
  expect(getParkingLotAfterEnter.ocuppiedSpaces).toBe(1);
});

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
  expect(getParkingLotAfterEnter.ocuppiedSpaces).toBe(1);
});

test.skip("should be closed", async function () {
  const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
  const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
  await enterParkingLot.execute(
    "shopping",
    "ABC-1234",
    new Date("2022-05-29T23:00:00")
  );
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
