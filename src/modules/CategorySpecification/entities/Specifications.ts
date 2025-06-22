import { Column, Entity, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
@Entity('Specification')
class Specifications {
  @PrimaryColumn()
  id?: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @CreateDateColumn()
  create_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { Specifications };
