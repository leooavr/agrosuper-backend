import { MigrationInterface, QueryRunner } from "typeorm";

export class addNewTables1668036289103 implements MigrationInterface {
    name = 'addNewTables1668036289103'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales_channel" RENAME COLUMN "id" TO "id_sales_channel"`);
        await queryRunner.query(`ALTER TABLE "sales_channel" RENAME CONSTRAINT "PK_d1eb0b923ea5a0eb1e0916191f1" TO "PK_26f2bbde893009ec195a37666a2"`);
        await queryRunner.query(`CREATE TABLE "area_category" ("id_area_category" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, CONSTRAINT "PK_bf29aa6ed496359df9b437ab70f" PRIMARY KEY ("id_area_category"))`);
        await queryRunner.query(`CREATE TABLE "district" ("id_district" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "id_commune" uuid NOT NULL, CONSTRAINT "PK_5328e6497c2285581846aecc84b" PRIMARY KEY ("id_district"))`);
        await queryRunner.query(`CREATE TABLE "delivery_zone" ("id_delivery_zone" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "id_commune" uuid NOT NULL, CONSTRAINT "PK_446218c23dff02f183c6867066f" PRIMARY KEY ("id_delivery_zone"))`);
        await queryRunner.query(`CREATE TABLE "clients" ("id_client" uuid NOT NULL DEFAULT uuid_generate_v4(), "rut" text NOT NULL, "address" text NOT NULL, "lat" text NOT NULL, "long" text NOT NULL, "social_reason" text NOT NULL, "local_client" bigint NOT NULL, "id_commune" uuid NOT NULL, "id_sales_channel" uuid NOT NULL, "id_delivery_zones" uuid NOT NULL, "id_area" uuid NOT NULL, CONSTRAINT "PK_59bc814de9b1855a712531853aa" PRIMARY KEY ("id_client"))`);
        await queryRunner.query(`CREATE TABLE "area" ("id_area" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "surface" text NOT NULL, "isUrban" boolean NOT NULL, "participation" text NOT NULL, "id_area_category" uuid NOT NULL, CONSTRAINT "PK_86074992649c7e39b53c6ac70aa" PRIMARY KEY ("id_area"))`);
        await queryRunner.query(`ALTER TABLE "district" ADD CONSTRAINT "FK_39ccf6e0e82de80441c3b916b13" FOREIGN KEY ("id_commune") REFERENCES "communes"("id_commune") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "delivery_zone" ADD CONSTRAINT "FK_605696b91f1b2b9cf6aa62f05d5" FOREIGN KEY ("id_commune") REFERENCES "communes"("id_commune") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "FK_08c21400dac370ccc702e15ae72" FOREIGN KEY ("id_commune") REFERENCES "communes"("id_commune") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "FK_df69d41da1942de3419b9b3173e" FOREIGN KEY ("id_sales_channel") REFERENCES "sales_channel"("id_sales_channel") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "FK_fd6e686834131a5a8a51e39ef00" FOREIGN KEY ("id_delivery_zones") REFERENCES "delivery_zone"("id_delivery_zone") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "FK_309253e25af06778a7b93e45087" FOREIGN KEY ("id_area") REFERENCES "area"("id_area") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "area" ADD CONSTRAINT "FK_bf75f75693a880d889cbe19cf12" FOREIGN KEY ("id_area_category") REFERENCES "area_category"("id_area_category") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "area" DROP CONSTRAINT "FK_bf75f75693a880d889cbe19cf12"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "FK_309253e25af06778a7b93e45087"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "FK_fd6e686834131a5a8a51e39ef00"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "FK_df69d41da1942de3419b9b3173e"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "FK_08c21400dac370ccc702e15ae72"`);
        await queryRunner.query(`ALTER TABLE "delivery_zone" DROP CONSTRAINT "FK_605696b91f1b2b9cf6aa62f05d5"`);
        await queryRunner.query(`ALTER TABLE "district" DROP CONSTRAINT "FK_39ccf6e0e82de80441c3b916b13"`);
        await queryRunner.query(`DROP TABLE "area"`);
        await queryRunner.query(`DROP TABLE "clients"`);
        await queryRunner.query(`DROP TABLE "delivery_zone"`);
        await queryRunner.query(`DROP TABLE "district"`);
        await queryRunner.query(`DROP TABLE "area_category"`);
        await queryRunner.query(`ALTER TABLE "sales_channel" RENAME CONSTRAINT "PK_26f2bbde893009ec195a37666a2" TO "PK_d1eb0b923ea5a0eb1e0916191f1"`);
        await queryRunner.query(`ALTER TABLE "sales_channel" RENAME COLUMN "id_sales_channel" TO "id"`);
    }

}
