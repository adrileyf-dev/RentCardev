import { Repository } from 'typeorm';
import { CreateCarDTO } from '../../accounts/Dtos/IDtoCreateCars';
import { ICarsRepository } from './ICarsRepository';
import Car from '../entities/Car';
import { AppDataSource } from '../../../database/data-source';

export class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;
  constructor() {
    this.repository = AppDataSource.getRepository(Car);
  }
  async create(Cardata: CreateCarDTO): Promise<void> {
    const car = this.repository.create(Cardata);
    await this.repository.save(car);
  }
}
