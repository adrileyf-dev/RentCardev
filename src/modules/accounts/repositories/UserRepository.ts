import { ICreateUserDto } from '../Dtos/ICreateUserDto';
import { IUserRepository } from './IUserRepository';
import { Repository } from 'typeorm';

import { AppDataSource } from '../../../database/data-source';
import { User } from '../entities/User';
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
  async findById(user_id: string): Promise<User | null> {
    return await this.repository.findOne({ where: { id: user_id } });
  }
}

export { UserRepository };
