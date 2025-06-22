import { ICreateUserDto } from '../Dtos/ICreateUserDto';
import { User } from '../entities/User';

interface IUserRepository {
  create(data: ICreateUserDto): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User>;
}

export { IUserRepository };
