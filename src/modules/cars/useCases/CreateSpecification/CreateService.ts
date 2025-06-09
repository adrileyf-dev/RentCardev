
import { IcreateSpecificationsDto } from "../../../../Dto/ICreateSpecificationsDto";
import { ISpecificationsRepositories } from "../../Interface/ISpecificationsRepositories";

class CreateService {
    constructor(private specificationsRepositories:ISpecificationsRepositories ){}
    execute({name,description}:IcreateSpecificationsDto):void{
        const categoryAlreadExists  = this.specificationsRepositories.findByName(name);
             if(categoryAlreadExists) {
                throw new Error("Specifications Already existe!")
             }
             this.specificationsRepositories.create({name,description});
    }
}
export {CreateService}
