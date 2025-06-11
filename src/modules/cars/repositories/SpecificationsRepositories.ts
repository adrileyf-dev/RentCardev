import { Repository } from 'typeorm';
import { IcreateSpecificationsDto } from '../../../Dto/ICreateSpecificationsDto';
import { ISpecificationsRepositories } from '../Interface/ISpecificationsRepositories';
import { Specifications } from '../entities/Specifications';
import { AppDataSource } from '../../../database/data-source';

class SpecificationsRepositories implements ISpecificationsRepositories {
  private repository: Repository<Specifications>;

  constructor() {
    this.repository = AppDataSource.getRepository(Specifications);
  }

  async findByName(name: string): Promise<Specifications | undefined> {
    return await this.repository.findOne({ where: { name } });
  }
  async list(): Promise<Specifications[]> {
    return [...(await this.repository.find())];
  }

  async create({ name, description }: IcreateSpecificationsDto): Promise<void> {
    const specification = this.repository.create({
      name,
      description,
    });
    await this.repository.save(specification);
  }
}

export { SpecificationsRepositories };
