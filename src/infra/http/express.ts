import express, { Express, Request, Response } from "express";
import ExpressAdapter from "../../adapter/ExpressAdapter";
import ParkingLotController from "../../controller/ParkingLotController";
import GetParkingLot from "../../core/usecase/GetParkingLot";
import ParkingLotRepositoryPostgres from "../repository/ParkingLotRepositoryPostgres";
const app: Express = express();

app.get(
  "/parkingLots/:code",
  ExpressAdapter.create(ParkingLotController.getParkingLot)
);

app.listen(3003, () => {
  console.log("Running");
});
