import { Router } from 'express';
import { IndexcreateController } from '../modules/cars/useCases/CreateSpecification';
import { IndexListController } from '../modules/cars/useCases/ListSpecification';

const SpecificationsRoutes = Router();

SpecificationsRoutes.post('/', (request, response) => {
  return IndexcreateController.handle(request, response);
});
SpecificationsRoutes.get('/all', (request, response) => {
  return IndexListController.handle(request, response);
});
export { SpecificationsRoutes };

// Swagger setup
