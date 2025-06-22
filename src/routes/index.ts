import { Router } from 'express';
import { categoriesRoutes } from './Categories.routes';
import SpecificationsRoutes from './Specifications.route';
import usersRoutes from './Users.route';
import authenticateRotes from './authenticate.route';
import CarRoutes from './Car.route';
const router = Router();
router.use('/categories', categoriesRoutes);
router.use('/specifications', SpecificationsRoutes);
router.use('/users', usersRoutes);
router.use('/cars', CarRoutes);

router.use(authenticateRotes);
export { router };
