import { inject, injectable } from 'tsyringe';
import { ISpecificationsRepositories } from '../../Interface/ISpecificationsRepositories';
import { Specifications } from '../../entities/Specifications';
@injectable()
class ListServices {
  constructor(
    @inject('SpecificationsRepositories')
    private specificationsRepositories: ISpecificationsRepositories,
  ) {}
  async execute(): Promise<Specifications[]> {
    return await this.specificationsRepositories.list();
  }
}
export { ListServices };
