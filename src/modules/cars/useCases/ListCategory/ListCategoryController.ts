import { Request, Response } from 'express';
import { ListCategoryUserCase } from './ListCategoryUserCase';

class ListCategoryController {
  constructor(private listCategoryUserCase: ListCategoryUserCase) {}
  handle(req: Request, res: Response): Response {
    return res.json(this.listCategoryUserCase.execute());
  }
}
export { ListCategoryController };
