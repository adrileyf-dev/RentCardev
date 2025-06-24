import { Router } from 'express';
import { CarCreateController } from '../modules/cars/controller/CarCreateController';
import { ensureAuthenticated } from '../middlewares/EnsureAuthenticated';
import { ensureAdmin } from '../middlewares/EnsureAdmin';
import { CarListAvailableController } from '../modules/cars/ListAvailableCar/controller/CarListAvailableController';

const CarRoutes = Router();
const createCarController = new CarCreateController();
const carListAvailableController = new CarListAvailableController();
CarRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle,
);

CarRoutes.get('/available', carListAvailableController.handle);
export default CarRoutes;
