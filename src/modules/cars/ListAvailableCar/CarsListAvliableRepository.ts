import { Repository } from 'typeorm';

import Car from '../entities/Car';
import { AppDataSource } from '../../../database/data-source';
import { ICarsListRepository } from './ICarsListAvliableRepository';

export class CarsListRepository implements ICarsListRepository {
  private repository: Repository<Car>;
  constructor() {
    this.repository = AppDataSource.getRepository(Car);
  }
  async findAvailable(
    brand?: string,
    category_id?: string,
    name?: string,
  ): Promise<Car[]> {
    const carQuery = this.repository
      .createQueryBuilder('c')
      .where('c.available = :available', { available: true });

    if (brand) {
      carQuery.andWhere('c.brand = :brand', { brand });
    }
    if (name) {
      carQuery.andWhere('c.name = :name', { name });
    }
    if (category_id) {
      carQuery.andWhere('c.category_id = :category_id', { category_id });
    }

    return await carQuery.getMany();
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return await this.repository.findOne({ where: { license_plate } });
  }
}
