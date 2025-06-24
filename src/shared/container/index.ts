import { container } from 'tsyringe';
import { ICategoriesRepositories } from '../../modules/category/Interface/ICategoriesRepositories';
import { CategoriesRepositories } from '../../modules/category/repositories/CategoriesRepositories';

import { IUserRepository } from '../../modules/accounts/repositories/IUserRepository';
import { UserRepository } from '../../modules/accounts/repositories/UserRepository';
import { ISpecificationsRepositories } from '../../modules/CategorySpecification/Interface/ISpecificationsRepositories';
import { SpecificationsRepositories } from '../../modules/CategorySpecification/repositories/SpecificationsRepositories';
import { ICarsRepository } from '../../modules/cars/repository/ICarsRepository';

import { ICarsListRepository } from '../../modules/cars/ListAvailableCar/ICarsListAvliableRepository';
import { CarsRepository } from '../../modules/cars/repository/CarsRepository';
import { CarsListRepository } from '../../modules/cars/ListAvailableCar/CarsListAvliableRepository';

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
container.registerSingleton<ICarsListRepository>(
  'CarsListRepository',
  CarsListRepository,
);
