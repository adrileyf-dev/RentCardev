import { ICategoriesRepositories } from "../../Interface/ICategoriesRepositories";
import { Category } from "../../model/category";

class ListCategoryUserCase{ 
 constructor(private categoryRepository: ICategoriesRepositories){
  }
     execute():Category[]{
        const categoryAll = this.categoryRepository.list();
     return categoryAll;   
    }
}
export {ListCategoryUserCase}