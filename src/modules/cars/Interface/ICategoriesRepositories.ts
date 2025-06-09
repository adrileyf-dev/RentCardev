 
import { ICreateCategoriaDto } from "../../../Dto/ICreateCategoriaDto";
import { Category } from "../model/category"

 interface ICategoriesRepositories {
    findByName(name:string):Category;
    list():Category[];
    create({name,description}:ICreateCategoriaDto):void;   
}
export{ICategoriesRepositories}