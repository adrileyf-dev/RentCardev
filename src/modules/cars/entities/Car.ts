import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { v4 as uuidV4 } from 'uuid';
@Entity('Cars')
class Car {
  @PrimaryGeneratedColumn('uuid')
  public id: string;
  @Column()
  public name: string;
  @Column()
  public description: string;
  @Column()
  public daily_rate: number;
  @Column()
  public available: boolean;
  @Column()
  public fine_amount: number;
  @Column()
  public license_plate: string;
  @Column()
  public brand: string;
  @Column()
  category_id: string;
  @CreateDateColumn({ name: 'created_at' })
  private created_at: Date;
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export default Car;
