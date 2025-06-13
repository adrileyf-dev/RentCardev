import { Router } from 'express';
import { categoriesRoutes } from './Categories.routes';
import { SpecificationsRoutes } from './Specifications.route';
import usersRoutes from './Users.route';
const router = Router();
router.use('/categories', categoriesRoutes);
router.use('/specifications', SpecificationsRoutes);
router.use('/users', usersRoutes);
export { router };
