import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateService from '../services/CreateServiceCar';
export class CarCreateController {
  async handle(request: Request, response: Response) {
    const carData = request.body;
    const serviceCreate = container.resolve(CreateService);
    await serviceCreate.execute(carData);
    return response.status(201).send();
  }
}
