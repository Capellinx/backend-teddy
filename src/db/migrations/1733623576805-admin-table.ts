import { MigrationInterface, QueryRunner } from "typeorm";

export class AdminTable1733623576805 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
        await queryRunner.query(`
        CREATE TABLE admins
        (
            id       uuid NOT NULL DEFAULT uuid_generate_v4(),
            name     varchar(255),
            password varchar(255),
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
    `);
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE IF EXISTS admins;
    `);
    }

}
