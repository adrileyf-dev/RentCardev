import { container } from 'tsyringe';
import { ICategoriesRepositories } from '../../modules/cars/Interface/ICategoriesRepositories';
import { CategoriesRepositories } from '../../modules/cars/repositories/CategoriesRepositories';

container.registerSingleton<ICategoriesRepositories>(
  'CategoriesRepository',
  CategoriesRepositories,
);
