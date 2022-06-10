import express, { Express, Request, Response } from "express";
import ExpressAdapter from "../../app/core/adapter/ExpressAdapter";
import { makeParkingLotController } from "../../app/core/factory/ParkingLotControllerFactory";
const app = express();
const expressAdapter = new ExpressAdapter(makeParkingLotController());
app.get("/parkingLots/:code", expressAdapter.show());

app.listen(3000, () => {
  console.log("Express Server Running in PORT 3000");
});
