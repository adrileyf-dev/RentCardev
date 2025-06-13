import { ICreateUserDto } from '../Dtos/ICreateUserDto';
import { IUserRepository } from './IUserRepository';
import { Repository } from 'typeorm';
import { User } from './../entities/User';
import { AppDataSource } from '../../../database/data-source';

class UserRepository implements IUserRepository {
  private repository: Repository<User>;
  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create(userData: ICreateUserDto): Promise<void> {
    const user = this.repository.create(userData);
    await this.repository.save(user);
  }
  async findByEmail(email: string): Promise<User> {
    return await this.repository.findOne({ where: { email } });
  }
}
export { UserRepository };
