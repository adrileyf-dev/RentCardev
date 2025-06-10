import { DataSource } from 'typeorm';
import { Category } from '../modules/cars/entities/Category';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5438,
  username: 'admin',
  password: 'admin',
  database: 'dev',
  synchronize: false,
  logging: false,
  entities: [Category],
  migrations: ['src/database/migrations/**/*.ts'],
});
