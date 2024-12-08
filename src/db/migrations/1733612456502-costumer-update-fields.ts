import { MigrationInterface, QueryRunner } from "typeorm";

export class CostumerUpdateFields1733612456502 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE costumers
            ADD COLUMN created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            ADD COLUMN updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        `);
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE costumers
            DROP COLUMN IF EXISTS created_at,
            DROP COLUMN IF EXISTS updated_at
        `);
    }
}
