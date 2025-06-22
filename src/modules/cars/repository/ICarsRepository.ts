import { CreateCarDTO } from '../../accounts/Dtos/IDtoCreateCars';

export interface ICarsRepository {
  create(data: CreateCarDTO): Promise<void>;
}
