import { CategoriesRepositories } from "../../repositories/CategoriesRepositories";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUserCase } from "./ListCategoryUserCase";

 const categoriesRepositories =  CategoriesRepositories.getIntence();

const listCategoryUserCase       = new ListCategoryUserCase(categoriesRepositories);
const IndexListCategoryContoller = new ListCategoryController(listCategoryUserCase);





export{IndexListCategoryContoller}

