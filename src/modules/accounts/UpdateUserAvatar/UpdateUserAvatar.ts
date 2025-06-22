import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '../repositories/IUserRepository';
import { deleteFile } from '../../../utilis/file';

interface IRequest {
  user_id: string;
  avatarFile: string;
}
@injectable()
class UpdataUserAvata {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}
  async execute({ user_id, avatarFile }: IRequest): Promise<void> {
    const user = await this.userRepository.findById(user_id);
    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }
    user.avatar = avatarFile;
    await this.userRepository.create(user);
  }
}
export default UpdataUserAvata;
