import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ServiceCreate } from '../services/ServiceCreate';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, driver_license } = request.body;
    const serviceCreate = container.resolve(ServiceCreate);
    await serviceCreate.execute({
      name,
      email,
      password,
      driver_license,
    });
    return response.status(201).send();
  }
}
export { CreateUserController };
