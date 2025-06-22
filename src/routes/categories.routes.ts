import { Router } from 'express';
import multer from 'multer';
import { CreateCategoryController } from '../modules/category/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../modules/category/importCategory/ImportCategoryController';
import { ListCategoryController } from '../modules/category/ListCategory/ListCategoryController';

const categoriesRoutes = Router();
const upload = multer({ dest: './tmp' });

const createCategoryContoller = new CreateCategoryController();
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
