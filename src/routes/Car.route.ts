import { Router } from 'express';
import { CarCreateController } from '../modules/cars/controller/CarCreateController';
import { ensureAuthenticated } from '../middlewares/EnsureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const CarRoutes = Router();
const createCarController = new CarCreateController();
CarRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle,
);

export default CarRoutes;
