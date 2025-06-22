import { Repository } from 'typeorm';
import { injectable } from 'tsyringe';
import { ICategoriesRepositories } from '../Interface/ICategoriesRepositories';
import { Category } from '../entities/Category';
import { AppDataSource } from '../../../database/data-source';
import { ICreateCategoriaDto } from '../Dto/ICreateCategoriaDto';

@injectable()
class CategoriesRepositories implements ICategoriesRepositories {
  private repository: Repository<Category>;

  //private static INSTANCE: CategoriesRepositories;

  constructor() {
    this.repository = AppDataSource.getRepository(Category);
  }
  /// singleton
  /* public static getIntence(): CategoriesRepositories {
    if (!CategoriesRepositories.INSTANCE) {
      CategoriesRepositories.INSTANCE = new CategoriesRepositories();
    }
    return CategoriesRepositories.INSTANCE;
  }*/

  async create({ name, description }: ICreateCategoriaDto): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });
    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    /*const categories = await this.repository.find();
    return categories;*/
    return await this.repository.find();
  }
  async findByName(name: string): Promise<Category | undefined> {
    /* const category = await this.repository.findOne({ where: { name } });
    return category;*/
    return await this.repository.findOne({ where: { name } });
  }
}
export { CategoriesRepositories };
