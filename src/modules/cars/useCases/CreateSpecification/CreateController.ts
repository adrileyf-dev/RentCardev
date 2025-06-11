import { CreateService } from './CreateService';
import { container } from 'tsyringe';
import { Request, Response } from 'express';
class CreateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createService = container.resolve(CreateService);
    const { name, description } = request.body;
    await createService.execute({ name, description });
    return response.status(201).send();
  }
}
export { CreateController };
