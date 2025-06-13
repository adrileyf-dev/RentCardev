import { container } from 'tsyringe';
import { ICategoriesRepositories } from '../../modules/cars/Interface/ICategoriesRepositories';
import { CategoriesRepositories } from '../../modules/cars/repositories/CategoriesRepositories';
import { ISpecificationsRepositories } from '../../modules/cars/Interface/ISpecificationsRepositories';
import { SpecificationsRepositories } from '../../modules/cars/repositories/SpecificationsRepositories';

import { IUserRepository } from '../../modules/accounts/repositories/IUserRepository';
import { UserRepository } from '../../modules/accounts/repositories/UserRepository';

container.registerSingleton<ICategoriesRepositories>(
  'CategoriesRepository',
  CategoriesRepositories,
);
container.registerSingleton<ISpecificationsRepositories>(
  'SpecificationsRepositories',
  SpecificationsRepositories,
);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
