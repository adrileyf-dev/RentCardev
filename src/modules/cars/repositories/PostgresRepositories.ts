import { ICreateCategoriaDto } from "../../../Dto/ICreateCategoriaDto";
import { ICategoriesRepositories } from "../Interface/ICategoriesRepositories";
import { Category } from "../model/category";

 

class PostgresRepositories implements ICategoriesRepositories {
  private categories: Category[];
  constructor() {
    this.categories = [];
  }
  create({ name, description }: ICreateCategoriaDto): void {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      create_at: new Date(),
    });
    this.categories.push(category);
    console.log("PostGress")
  }  
  list():Category[]{
     console.log("PostGress")
    return this.categories;
    
  }
  findByName(name : string){
    const category = this.categories.find((category)=>category.name === name);
     console.log("PostGress")
    return category;
    
  }
}
export { PostgresRepositories };
