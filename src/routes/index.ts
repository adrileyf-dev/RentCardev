import { Router } from 'express';
import { categoriesRoutes } from './Categories.routes';
import { SpecificationsRoutes } from './Specifications.route';
const router = Router();
router.use('/categories', categoriesRoutes);
router.use('/specifications', SpecificationsRoutes);
export { router };
