import { ICreateCategoriaDto } from "../../../Dto/ICreateCategoriaDto";
import { ICategoriesRepositories } from "../Interface/ICategoriesRepositories";
import { Category } from "../model/category";



class CategoriesRepositories implements ICategoriesRepositories {
  private categories: Category[];
  private static INSTANCE : CategoriesRepositories;

  private constructor() {
    this.categories = [];
  }
  /// singleton
  public static getIntence() : CategoriesRepositories{
    if(!CategoriesRepositories.INSTANCE){
         CategoriesRepositories.INSTANCE = new CategoriesRepositories();
    }
return CategoriesRepositories.INSTANCE;
  }

  create({ name, description }: ICreateCategoriaDto): void {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      create_at: new Date(),
    });
    this.categories.push(category);
  }
  list():Category[]{
    return this.categories;
  }
  findByName(name : string){
    const category = this.categories.find((category)=>category.name === name);
    return category;
  }
}
export { CategoriesRepositories };
