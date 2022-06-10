import ParkingLotController from "../controller/ParkingLotController";

export default class ExpressAdapter {
  constructor(private readonly controller: ParkingLotController) {}
  show() {
    return async (req, res) => {
      const obj = await this.controller.show(req.params, req.body);
      res.send(obj);
    };
  }
  leaveCar() {
    return async (req, res) => {
      const obj = await this.controller.leaveCar(req.params, req.body);
      res.send(obj);
    };
  }
  enterCar() {
    return async (req, res) => {
      const obj = await this.controller.enterCar(req.params, req.body);
      res.send(obj);
    };
  }
}
