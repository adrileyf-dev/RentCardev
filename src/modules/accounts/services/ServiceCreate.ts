import { inject, injectable } from 'tsyringe';
import { hash } from 'bcrypt';
import { IUserRepository } from '../repositories/IUserRepository';
import { ICreateUserDto } from '../Dtos/ICreateUserDto';

@injectable()
class ServiceCreate {
  constructor(
    @inject('UserRepository') private userRepository: IUserRepository,
  ) {}
  async execute(userDate: ICreateUserDto): Promise<void> {
    const userAlredyExistes = await this.userRepository.findByEmail(
      userDate.email,
    );
    if (userAlredyExistes) {
      throw new Error('User already existes!!');
    }
    userDate.password = await hash(userDate.password, 8);
    return this.userRepository.create(userDate);
  }
}
export { ServiceCreate };
