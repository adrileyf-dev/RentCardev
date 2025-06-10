import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryService } from './ImportCategoryService';

const categoriesRepositories = null;
const importCategoryUserCase = new ImportCategoryService(
  categoriesRepositories,
);
const importCategoryController = new ImportCategoryController(
  importCategoryUserCase,
);
export { importCategoryController };
