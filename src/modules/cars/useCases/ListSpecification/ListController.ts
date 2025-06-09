import { ListServices } from "./ListServices";
import { Request,Response } from 'express';

class ListController{
  constructor(private listservice : ListServices){}
   handle(request:Request,response:Response):Response{
   return response.json(this.listservice.execute());
  }
}
export {ListController}
