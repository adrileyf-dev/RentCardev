import { IcreateSpecificationsDto } from '../Dto/ICreateSpecificationsDto';
import { Specifications } from '../entities/Specifications';

interface ISpecificationsRepositories {
  findByName(name: string): Promise<Specifications>;
  list(): Promise<Specifications[]>;
  create({ name, description }: IcreateSpecificationsDto): Promise<void>;
}
export { ISpecificationsRepositories };
