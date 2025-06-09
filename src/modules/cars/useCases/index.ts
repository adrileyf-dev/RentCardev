import { CategoriesRepositories } from "../repositories/CategoriesRepositories";
import { CreateCategoryUserCase } from "./createCategory/CreateCategoryUserCase";
import { CreateCategoryContoller } from "./createCategory/CreateCategoryContoller";
 
/// export create Category 
 const categoriesRepositories =  CategoriesRepositories.getIntence();
const createCategoryUserCase  = new CreateCategoryUserCase(categoriesRepositories);
const IndexcreateCategoryContoller = new CreateCategoryContoller(createCategoryUserCase);

/// export create ListCategory
/* 
const listCategoryUserCase       = new ListCategoryUserCase(categoriesRepositories);
const IndexListCategoryContoller = new ListCategoryController(listCategoryUserCase);
*/


export{IndexcreateCategoryContoller}

