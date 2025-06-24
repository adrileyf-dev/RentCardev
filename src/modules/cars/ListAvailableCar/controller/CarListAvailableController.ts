import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListaAvailbleServiceCar from '../services/ListaAvliableServiceCar';

export class CarListAvailableController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { brand, name, category_id } = request.query;
    const listServiceAvliable = container.resolve(ListaAvailbleServiceCar);
    const cars = await listServiceAvliable.execute({
      brand: brand as string,
      name: name as string,
      category_id: category_id as string,
    });
    return response.json(cars);
  }
}
