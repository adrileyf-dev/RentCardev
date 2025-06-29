import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterUserAvatar1750108734663 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'Users',
      new TableColumn({ name: 'avatar', type: 'varchar', isNullable: true }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('Users', 'avatar');
  }
}
