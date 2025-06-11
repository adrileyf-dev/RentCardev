import fs from 'fs';
import { parse as csvParse } from 'csv-parse';
import { CategoriesRepositories } from '../../repositories/CategoriesRepositories';
import { ICreateCategoriaDto } from '../../../../Dto/ICreateCategoriaDto';
import { inject, injectable } from 'tsyringe';
@injectable()
class ImportCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepositories: CategoriesRepositories,
  ) {}

  LoadCategory(file: Express.Multer.File): Promise<ICreateCategoriaDto[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: ICreateCategoriaDto[] = [];
      const parseFile = csvParse();

      stream.pipe(parseFile);
      parseFile
        .on('data', async (line) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }
  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.LoadCategory(file);
    categories.map(async (cat) => {
      const { name, description } = cat;
      const existeCategory = await this.categoriesRepositories.findByName(name);
      if (!existeCategory) {
        await this.categoriesRepositories.create({ name, description });
      }
    });
  }
}
export { ImportCategoryService };
