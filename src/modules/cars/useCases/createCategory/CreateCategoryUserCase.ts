
import { ICreateCategoriaDto } from "../../../../Dto/ICreateCategoriaDto";
import { ICategoriesRepositories } from "../../Interface/ICategoriesRepositories"; 
class CreateCategoryUserCase{
  constructor(private categoryRepository : ICategoriesRepositories){}

    execute({name, description}:ICreateCategoriaDto):void{
         const categoryAlreadExists  = this.categoryRepository.findByName(name);
             if(categoryAlreadExists) {
                throw new Error("Category Already existe! ")
             }            
           this.categoryRepository.create({name,description});    
    }
}
export {CreateCategoryUserCase}