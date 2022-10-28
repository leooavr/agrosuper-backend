import { MigrationInterface, QueryRunner } from "typeorm";

export class provinces1666929953851 implements MigrationInterface {
    name = 'provinces1666929953851'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "provinces" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text, CONSTRAINT "PK_2e4260eedbcad036ec53222e0c7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "provinces"`);
    }

}
