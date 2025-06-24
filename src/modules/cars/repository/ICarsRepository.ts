import { ICreateCarDTO } from '../../accounts/Dtos/IDtoCreateCars';
import Car from '../entities/Car';

export interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<void>;
  findByLicensePlate(license_plate: string): Promise<Car | null>;
}
