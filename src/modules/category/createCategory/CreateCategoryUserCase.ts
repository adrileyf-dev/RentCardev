import { ICreateCategoriaDto } from '../Dto/ICreateCategoriaDto';
import { ApError } from '../../../errors/AppErros';
import { ICategoriesRepositories } from '../Interface/ICategoriesRepositories';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateCategoryUserCase {
  constructor(
    @inject('CategoriesRepository')
    private categoryRepository: ICategoriesRepositories,
  ) {}

  async execute({ name, description }: ICreateCategoriaDto): Promise<void> {
    const categoryAlreadExists = await this.categoryRepository.findByName(name);

    if (categoryAlreadExists) {
      throw new ApError('Category Already existe!');
    }
    this.categoryRepository.create({ name, description });
  }
}
export { CreateCategoryUserCase };
