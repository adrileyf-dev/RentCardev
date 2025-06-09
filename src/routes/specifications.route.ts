import { Router } from 'express';
import { IndexcreateController } from '../modules/cars/useCases/CreateSpecification';
import { IndexListController } from '../modules/cars/useCases/ListSpecification';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
  return IndexcreateController.handle(request, response);
});
specificationsRoutes.get('/all', (request, response) => {
  return IndexListController.handle(request, response);
});
export { specificationsRoutes };

// Swagger setup
