import { inject, injectable } from 'tsyringe';
import { IcreateSpecificationsDto } from '../../category/Dto/ICreateSpecificationsDto';

import { ApError } from '../../../errors/AppErros';
import { ISpecificationsRepositories } from '../Interface/ISpecificationsRepositories';

@injectable()
class CreateService {
  constructor(
    @inject('SpecificationsRepositories')
    private specificationsRepositories: ISpecificationsRepositories,
  ) {}
  async execute({
    name,
    description,
  }: IcreateSpecificationsDto): Promise<void> {
    const categoryAlreadExists =
      await this.specificationsRepositories.findByName(name);
    if (categoryAlreadExists) {
      throw new ApError('Specifications Already existe!');
    }
    await this.specificationsRepositories.findByName(name);
    this.specificationsRepositories.create({ name, description });
  }
}
export { CreateService };
