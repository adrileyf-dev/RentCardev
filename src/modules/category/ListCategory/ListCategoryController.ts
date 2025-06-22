import { Request, Response } from 'express';
import { ListCategoryUserCase } from './ListCategoryUserCase';
import { container } from 'tsyringe';

class ListCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listCategoryUserCase = container.resolve(ListCategoryUserCase);
    return res.json(await listCategoryUserCase.execute());
  }
}
export { ListCategoryController };
