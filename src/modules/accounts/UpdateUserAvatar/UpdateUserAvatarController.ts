import { Response, Request } from 'express';
import { container } from 'tsyringe';
import UpdataUserAvata from './UpdateUserAvatar';
class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const avatarFile = request.file.filename;
    const updataUserAvatar = container.resolve(UpdataUserAvata);
    await updataUserAvatar.execute({ user_id: id, avatarFile });
    return response.status(204).send();
  }
}
export default UpdateUserAvatarController;
