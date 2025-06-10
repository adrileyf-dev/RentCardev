import { Router } from 'express';

import { IndexListCategoryContoller } from '../modules/cars/useCases/ListCategory';
import multer from 'multer';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import { CreateCategoryContoller } from '../modules/cars/useCases/createCategory/CreateCategoryContoller';

const categoriesRoutes = Router();

const upload = multer({ dest: './tmp' });

const createCategoryContoller = new CreateCategoryContoller();

categoriesRoutes.post('/', (request, response) => {
  return createCategoryContoller.handle(request, response);
});

categoriesRoutes.get('/all', (request, response) => {
  return IndexListCategoryContoller.handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handle(request, response);
});
export { categoriesRoutes };
