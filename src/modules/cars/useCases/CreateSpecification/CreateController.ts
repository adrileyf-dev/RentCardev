import { CreateService } from "./CreateService";
import { Request ,Response} from 'express';
class CreateController{
  constructor(private createService: CreateService) {
  }
   handle(request:Request,  response :Response):Response{
      const{name,description} = request.body;
      this.createService.execute({name,description});
    return response.status(201).send();
   }
}
export {CreateController}
