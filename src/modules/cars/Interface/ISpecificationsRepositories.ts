 
import { IcreateSpecificationsDto } from "../../../Dto/ICreateSpecificationsDto";
import { Specifications } from "../model/Specifications"

 interface ISpecificationsRepositories {
    findByName(name:string):Specifications;
    list():Specifications[];
    create({name,description}:IcreateSpecificationsDto):void;   
}
export{ISpecificationsRepositories}