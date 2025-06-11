import { Router } from 'express';

import { CreateController } from '../modules/cars/useCases/CreateSpecification/CreateController';
import { ListController } from '../modules/cars/useCases/ListSpecification/ListController';

const SpecificationsRoutes = Router();
const createController = new CreateController();
const listController = new ListController();

SpecificationsRoutes.post('/', createController.handle);

SpecificationsRoutes.get('/all', listController.handle);
export { SpecificationsRoutes };

// Swagger setup
