import { Router } from 'express';
import { CreateController } from '../modules/CategorySpecification/CreateSpecification/CreateController';
import { ListController } from '../modules/CategorySpecification/ListSpecification/ListController';
import { ensureAuthenticated } from '../middlewares/EnsureAuthenticated';

const SpecificationsRoutes = Router();
const createController = new CreateController();
const listController = new ListController();
SpecificationsRoutes.use(ensureAuthenticated);
SpecificationsRoutes.post('/', createController.handle);
SpecificationsRoutes.get('/all', listController.handle);

export default SpecificationsRoutes;

// Swagger setup
