import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCars1750468881208 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Cars',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'available',
            type: 'boolean',
            default: true,
          },
          {
            name: 'fine_amount',
            type: 'numeric',
          },
          {
            name: 'daily_rate',
            type: 'numeric',
          },
          {
            name: 'license_plate',
            type: 'varchar',
          },
          {
            name: 'brand',
            type: 'varchar',
          },

          {
            name: 'category_id',
            type: 'uuid',
            isNullable: true,
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKCategoriesCar',
            referencedTableName: 'Categories',
            referencedColumnNames: ['id'],
            columnNames: ['category_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Cars');
  }
}
