import express, { Express, Request, Response } from "express";
import GetParkingLot from "../../app/core/useCase/GetParkingLot";
import ParkingLotRepositoryMemory from "../repository/ParkingLotRepositoryMemory";
const app = express();
app.get("/parkingLots/:code", async (req: Request, res: Response) => {
  const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
  const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);

  res.send(await getParkingLot.execute(req.params.code));
});

app.listen(3000, () => {
  console.log("Express Server Running in PORT 3000");
});
