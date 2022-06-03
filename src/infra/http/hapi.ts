import Hapi from "@hapi/hapi";
import HapiAdapter from "../../adapter/HapiAdapter";
import ParkingLotController from "../../controller/ParkingLotController";

const server = new Hapi.server({
  port: 3001,
  host: "localhost",
});

server.route({
  method: "GET",
  path: "/parkingLots/{code}",
  handler: HapiAdapter.create(ParkingLotController.getParkingLot),
});

server.start();
