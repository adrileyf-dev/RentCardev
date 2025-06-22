import { ICreateCategoriaDto } from '../Dto/ICreateCategoriaDto';
import { Category } from '../entities/Category';

interface ICategoriesRepositories {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoriaDto): Promise<void>;
}
export { ICategoriesRepositories };
