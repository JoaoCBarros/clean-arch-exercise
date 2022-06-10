import ParkingLotController from "../controller/ParkingLotController";

export default class ExpressAdapter {
  constructor(private readonly controller: ParkingLotController) {}
  create() {
    return async (req, res) => {
      const obj = await this.controller.show(req.params, req.body);
      res.send(obj);
    };
  }
}
