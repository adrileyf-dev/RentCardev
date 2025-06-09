import { Request ,Response} from 'express';
import { CreateCategoryUserCase } from './CreateCategoryUserCase';

class CreateCategoryContoller{
     constructor(private createCategoryUserCase : CreateCategoryUserCase){
     }
        handle(request:Request, response :Response) : Response{
            const {name,description} = request.body;  
            this.createCategoryUserCase.execute({name,description});   
        return response.status(201).send();
    }    
}
export {CreateCategoryContoller}