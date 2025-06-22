import { Router } from 'express';
import { CarCreateController } from '../modules/cars/controller/CarCreateController';

const CarRoutes = Router();
const createCarController = new CarCreateController();
CarRoutes.post('/', createCarController.handle);

export default CarRoutes;
