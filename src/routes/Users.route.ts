import { Router } from 'express';

import { CreateUserController } from '../modules/accounts/controller/CreateUserController';

const usersRoutes = Router();
const createUserController = new CreateUserController();
usersRoutes.post('/', createUserController.handle);
//usersRoutes.get('/all', listController.handle);
export default usersRoutes;

// Swagger setup
