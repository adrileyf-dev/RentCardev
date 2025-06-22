import { container } from 'tsyringe';
import { ICategoriesRepositories } from '../../modules/category/Interface/ICategoriesRepositories';
import { CategoriesRepositories } from '../../modules/category/repositories/CategoriesRepositories';

import { IUserRepository } from '../../modules/accounts/repositories/IUserRepository';
import { UserRepository } from '../../modules/accounts/repositories/UserRepository';
import { ISpecificationsRepositories } from '../../modules/CategorySpecification/Interface/ISpecificationsRepositories';
import { SpecificationsRepositories } from '../../modules/CategorySpecification/repositories/SpecificationsRepositories';
import { ICarsRepository } from '../../modules/cars/repository/ICarsRepository';
import { CarsRepository } from '../../modules/cars/repository/CarsRepository';

container.registerSingleton<ICategoriesRepositories>(
  'CategoriesRepository',
  CategoriesRepositories,
);
container.registerSingleton<ISpecificationsRepositories>(
  'SpecificationsRepositories',
  SpecificationsRepositories,
);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository);
