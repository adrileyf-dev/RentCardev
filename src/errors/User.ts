import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { v4 as uuidV4 } from 'uuid';
@Entity('Users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public name: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  //@Exclude() // Remove o campo quando for serializado para JSON
  public password: string;

  @Column()
  public driver_license: string;

  @Column({ default: false })
  private isAdmin: boolean;

  @Column({ default: false })
  public avatar: string;

  @CreateDateColumn({ name: 'create_at' })
  private createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
