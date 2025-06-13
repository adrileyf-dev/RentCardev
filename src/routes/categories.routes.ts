import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryContoller } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController';
import { ListCategoryController } from '../modules/cars/useCases/ListCategory/ListCategoryController';

const categoriesRoutes = Router();
const upload = multer({ dest: './tmp' });

const createCategoryContoller = new CreateCategoryContoller();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();
/*
categoriesRoutes.post('/', (request, response) => {
  return createCategoryContoller.handle(request, response);
});
*/
categoriesRoutes.post('/', createCategoryContoller.handle);
categoriesRoutes.get('/all', listCategoryController.handle);
categoriesRoutes.post(
  '/import',
  upload.single('file'),
  importCategoryController.handle,
);

export { categoriesRoutes };
