import { MigrationInterface, QueryRunner } from "typeorm";

export class updatesRegionsProvincesCommunes1667534335372 implements MigrationInterface {
    name = 'updatesRegionsProvincesCommunes1667534335372'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "regions" RENAME COLUMN "region_number" TO "id_region"`);
        await queryRunner.query(`ALTER TABLE "regions" RENAME CONSTRAINT "PK_645d5b29e67eca3fb73ac839155" TO "PK_c5101628875d5150d9dc70edc1c"`);
        await queryRunner.query(`CREATE TABLE "communes" ("id_commune" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "id_province" uuid NOT NULL, CONSTRAINT "PK_6f70cdac00334844a6d16ed45b1" PRIMARY KEY ("id_commune"))`);
        await queryRunner.query(`CREATE TABLE "sales_channel" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, CONSTRAINT "PK_d1eb0b923ea5a0eb1e0916191f1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "provinces" DROP CONSTRAINT "PK_2e4260eedbcad036ec53222e0c7"`);
        await queryRunner.query(`ALTER TABLE "provinces" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "provinces" ADD "id_province" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "provinces" ADD CONSTRAINT "PK_3b79e7c6885931710f025c523e6" PRIMARY KEY ("id_province")`);
        await queryRunner.query(`ALTER TABLE "provinces" ADD "id_region" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "communes" ADD CONSTRAINT "FK_c4315463e39f82ad2837d46ba62" FOREIGN KEY ("id_province") REFERENCES "provinces"("id_province") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "provinces" ADD CONSTRAINT "FK_32880d128bde85acb530706930f" FOREIGN KEY ("id_region") REFERENCES "regions"("id_region") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "provinces" DROP CONSTRAINT "FK_32880d128bde85acb530706930f"`);
        await queryRunner.query(`ALTER TABLE "communes" DROP CONSTRAINT "FK_c4315463e39f82ad2837d46ba62"`);
        await queryRunner.query(`ALTER TABLE "provinces" DROP COLUMN "id_region"`);
        await queryRunner.query(`ALTER TABLE "provinces" DROP CONSTRAINT "PK_3b79e7c6885931710f025c523e6"`);
        await queryRunner.query(`ALTER TABLE "provinces" DROP COLUMN "id_province"`);
        await queryRunner.query(`ALTER TABLE "provinces" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "provinces" ADD CONSTRAINT "PK_2e4260eedbcad036ec53222e0c7" PRIMARY KEY ("id")`);
        await queryRunner.query(`DROP TABLE "sales_channel"`);
        await queryRunner.query(`DROP TABLE "communes"`);
        await queryRunner.query(`ALTER TABLE "regions" RENAME CONSTRAINT "PK_c5101628875d5150d9dc70edc1c" TO "PK_645d5b29e67eca3fb73ac839155"`);
        await queryRunner.query(`ALTER TABLE "regions" RENAME COLUMN "id_region" TO "region_number"`);
    }

}
