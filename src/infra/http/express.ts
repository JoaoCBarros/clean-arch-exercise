import express, { Express, Request, Response } from "express";
import ExpressAdapter from "../../app/core/adapter/ExpressAdapter";
import ParkingLotController from "../../app/core/controller/ParkingLotController";
const app = express();
app.get(
  "/parkingLots/:code",
  ExpressAdapter.create(ParkingLotController.getParkingLot)
);

app.listen(3000, () => {
  console.log("Express Server Running in PORT 3000");
});
