import ParkingLotAdapter from "../../app/core/adapter/ParkingLotAdapter";
import ParkingLot from "../../app/core/entity/ParkingLot";
import ParkingLotRepository from "../../app/core/repository/ParkingLotRepository";

export default class ParkingLotRepositoryMemory
  implements ParkingLotRepository
{
  parkingLots = [
    {
      code: "shopping",
      open_hour: 8,
      close_hour: 22,
    },
  ];
  parkedCars = [];

  async saveParkedCar(code: string, plate: string, date: Date): Promise<void> {
    this.parkedCars.push({ code, plate, date });
  }

  getParkingLot(code: string): Promise<ParkingLot> {
    const parkingLotData = this.parkingLots.filter((item) => {
      return item.code === code;
    })[0];
    console.log(this.parkedCars);
    const occupationSpaces = this.parkedCars.filter((item) => {
      return item.code === code;
    }).length;

    const parkingLot = ParkingLotAdapter.create(
      parkingLotData.code,
      parkingLotData.open_hour,
      parkingLotData.close_hour,
      occupationSpaces
    );

    return Promise.resolve(parkingLot);
  }
}
