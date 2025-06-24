import Car from '../entities/Car';

export interface ICarsListRepository {
  findByLicensePlate(license_plate: string): Promise<Car | null>;
  findAvailable(
    brand?: string,
    category_id?: string,
    name?: string,
  ): Promise<Car[]>;
}
