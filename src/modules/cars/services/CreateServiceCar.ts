import { inject, injectable } from 'tsyringe';
import ICreateCarDTO from '../dto/ICreateCarDTO ';
import { ICarsRepository } from '../repository/ICarsRepository';
import { ApError } from '../../../errors/AppErros';

@injectable()
class CreateService {
  constructor(
    @inject('CarsRepository') private carReposotory: ICarsRepository,
  ) {}
  async execute(carData: ICreateCarDTO): Promise<void> {
    const CarExiste = await this.carReposotory.findByLicensePlate(
      carData.license_plate,
    );
    if (CarExiste) {
      throw new ApError('Car already existes!!');
    }
    return this.carReposotory.create(carData);
  }
}
export default CreateService;
