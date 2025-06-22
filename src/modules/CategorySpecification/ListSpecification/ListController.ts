import { ListServices } from './ListServices';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listServices = container.resolve(ListServices);
    return response.json(await listServices.execute());
  }
}
export { ListController };
