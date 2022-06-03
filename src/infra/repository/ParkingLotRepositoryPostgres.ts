import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";
import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";
import db from "../database/database-pg";
export default class ParkingLotRepositoryPostgres
  implements ParkingLotRepository
{
  private readonly database_name = "clean_arch_db";
  async getParkingLot(code: string): Promise<ParkingLot> {
    const parkingLot = await db.oneOrNone(
      `select * from parking_lot where code = $1`,
      [code]
    );

    const { occupied_spaces } = await db.oneOrNone(
      `select count(*)::int as occupied_spaces from parked_car WHERE code = $1`,
      [code]
    );

    return ParkingLotAdapter.create(
      parkingLot.code,
      parkingLot.capacity,
      parkingLot.open_hour,
      parkingLot.close_hour,
      occupied_spaces
    );
  }
  async saveParkedCar(code: string, plate: string, date: Date): Promise<void> {
    await db.none(
      `insert into parked_car (code, plate, date) values ($1, $2, $3)`,
      [code, plate, date]
    );
  }
}
