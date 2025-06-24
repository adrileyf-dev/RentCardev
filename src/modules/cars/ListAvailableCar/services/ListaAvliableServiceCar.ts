import { inject, injectable } from 'tsyringe';
import { ICarsListRepository } from '../ICarsListAvliableRepository';
import Car from '../../entities/Car';
import ICreateCarDTO from '../../dto/ICreateCarDTO ';

@injectable()
class ListaServiceCar {
  ///private repository: Repository<Car>;
  constructor(
    @inject('CarsListRepository')
    private carListReposotory: ICarsListRepository,
  ) {}

  async execute({ category_id, brand, name }: ICreateCarDTO): Promise<Car[]> {
    return await this.carListReposotory.findAvailable(brand, category_id, name);
  }
}
export default ListaServiceCar;
