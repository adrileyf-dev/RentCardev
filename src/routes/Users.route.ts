import { Router } from 'express';

import uploadConfig from '../config/upload';
import { CreateUserController } from '../modules/accounts/controller/CreateUserController';
import UpdateUserAvatarController from '../modules/accounts/UpdateUserAvatar/UpdateUserAvatarController';
import multer from 'multer';
import { ensureAuthenticated } from '../middlewares/EnsureAuthenticated';

const usersRoutes = Router();
const createUserController = new CreateUserController();
const updataUserAvatarController = new UpdateUserAvatarController();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

usersRoutes.post('/', createUserController.handle);
usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updataUserAvatarController.handle,
);
//usersRoutes.get('/all', listController.handle);
export default usersRoutes;
// Swagger setup
