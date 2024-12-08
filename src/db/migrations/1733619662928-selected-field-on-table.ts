import { MigrationInterface, QueryRunner } from "typeorm";

export class SelectedFieldOnTable1733619662928 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE costumers
            ADD COLUMN is_selected BOOLEAN DEFAULT false
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE costumers
        DROP COLUMN IF EXISTS is_selected
    `);
  }
}
