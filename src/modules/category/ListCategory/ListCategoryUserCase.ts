import { Category } from '../entities/Category';

import { inject, injectable } from 'tsyringe';
import { ICategoriesRepositories } from '../Interface/ICategoriesRepositories';

@injectable()
class ListCategoryUserCase {
  constructor(
    @inject('CategoriesRepository')
    private categoryRepository: ICategoriesRepositories,
  ) {}
  async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.list();
    return categories;
  }
}

export { ListCategoryUserCase };
