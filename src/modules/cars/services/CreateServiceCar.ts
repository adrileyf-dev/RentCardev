import { inject, injectable } from 'tsyringe';
import ICreateCarDTO from '../dto/ICreateCarDTO ';
import { ICarsRepository } from '../repository/ICarsRepository';

@injectable()
class CreateService {
  constructor(
    @inject('CarsRepository') private carReposotory: ICarsRepository,
  ) {}
  async execute(carData: ICreateCarDTO): Promise<void> {
    return this.carReposotory.create(carData);
  }
}
export default CreateService;
