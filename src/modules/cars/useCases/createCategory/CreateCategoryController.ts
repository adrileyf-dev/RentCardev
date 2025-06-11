import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCategoryUserCase } from './CreateCategoryUserCase';
/*       CreateCategoryUseCase
class CreateCategoryContoller {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    /// injeção automomatica
    const createCategoryUserCase = container.resolve(CreateCategoryUserCase);

    await createCategoryUserCase.execute({ name, description });
    return response.status(201).send();
  }
}
export { CreateCategoryContoller };*/

class CreateCategoryContoller {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUserCase);

    await createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryContoller };
