import { ICategoriesRepositories } from '../../Interface/ICategoriesRepositories';
import { Category } from '../../entities/Category';

class ListCategoryUserCase {
  constructor(private categoryRepository: ICategoriesRepositories) {}
  async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.list();
    return categories;
  }
}

export { ListCategoryUserCase };
