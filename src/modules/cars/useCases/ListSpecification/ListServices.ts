import { ISpecificationsRepositories } from "../../Interface/ISpecificationsRepositories";
import { Specifications } from "../../model/Specifications";


class ListServices{
   constructor(private specificationsRepositories: ISpecificationsRepositories){}
   execute():Specifications[]{
       const All = this.specificationsRepositories.list();
       return All;
   }
}
export {ListServices}
