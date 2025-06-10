import { IcreateSpecificationsDto } from '../../../Dto/ICreateSpecificationsDto';
import { ISpecificationsRepositories } from '../Interface/ISpecificationsRepositories';
import { Specifications } from '../entities/Specifications';

class SpecificationsRepositories implements ISpecificationsRepositories {
  private specifications: Specifications[];
  private static INSTANCE: SpecificationsRepositories;

  constructor() {
    this.specifications = [];
  }
  public static getIntence(): SpecificationsRepositories {
    if (!SpecificationsRepositories.INSTANCE) {
      SpecificationsRepositories.INSTANCE = new SpecificationsRepositories();
    }
    return SpecificationsRepositories.INSTANCE;
  }

  findByName(name: string): Specifications | undefined {
    return this.specifications.find((spec) => spec.name === name);
  }

  list(): Specifications[] {
    return [...this.specifications];
  }

  create({ name, description }: IcreateSpecificationsDto): void {
    const specification = new Specifications();
    Object.assign(specification, {
      name,
      description,
      create_at: new Date(),
    });
    this.specifications.push(specification);
  }
}

export { SpecificationsRepositories };
