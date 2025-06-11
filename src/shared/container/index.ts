import { container } from 'tsyringe';
import { ICategoriesRepositories } from '../../modules/cars/Interface/ICategoriesRepositories';
import { CategoriesRepositories } from '../../modules/cars/repositories/CategoriesRepositories';
import { ISpecificationsRepositories } from '../../modules/cars/Interface/ISpecificationsRepositories';
import { SpecificationsRepositories } from '../../modules/cars/repositories/SpecificationsRepositories';

container.registerSingleton<ICategoriesRepositories>(
  'CategoriesRepository',
  CategoriesRepositories,
);
container.registerSingleton<ISpecificationsRepositories>(
  'SpecificationsRepositories',
  SpecificationsRepositories,
);
