import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveUpdatedAt1733665358995 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE costumers
            DROP COLUMN IF EXISTS updated_at
        `);
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE costumers
                ADD COLUMN updated_at TIMESTAMP
        `);
    }
    
}
