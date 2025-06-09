import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryService } from './ImportCategoryService';
import { CategoriesRepositories } from '../../repositories/CategoriesRepositories';

const importCategoryUserCase = new ImportCategoryService(
  CategoriesRepositories.getIntence(),
);
const importCategoryController = new ImportCategoryController(
  importCategoryUserCase,
);
export { importCategoryController };
s;
