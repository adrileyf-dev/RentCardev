import { IUserRepository } from '../repositories/IUserRepository';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import IUserResponse from './IUserResponse';

interface IRequest {
  email: string;
  password: string;
}
@injectable()
class AuthenticateServiceUser {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}
  async execute({ email, password }: IRequest): Promise<IUserResponse> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Email or password incorret ! ');
    }
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Email or password incorret ! ');
    }
    const token = sign({}, 'M5T%yAzE<<?|', {
      subject: user.id,
      expiresIn: '1d',
    });

    const tokenReturn: IUserResponse = {
      token,
      user: { name: user.name, email: user.email },
    };
    return tokenReturn;
  }
}

export default AuthenticateServiceUser;
