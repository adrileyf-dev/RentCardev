import { ListCategoryController } from './ListCategoryController';
import { ListCategoryUserCase } from './ListCategoryUserCase';

const categoriesRepositories = null;

const listCategoryUserCase = new ListCategoryUserCase(categoriesRepositories);
const IndexListCategoryContoller = new ListCategoryController(
  listCategoryUserCase,
);

export { IndexListCategoryContoller };
