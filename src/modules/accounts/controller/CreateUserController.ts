import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ServiceCreate } from '../services/ServiceCreate';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userData = request.body;
    const serviceCreate = container.resolve(ServiceCreate);
    await serviceCreate.execute(userData);
    return response.status(201).send();
  }
}
export { CreateUserController };
