import { MigrationInterface, QueryRunner } from "typeorm";

export class addFinalTables1668107551489 implements MigrationInterface {
    name = 'addFinalTables1668107551489'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "FK_fd6e686834131a5a8a51e39ef00"`);
        await queryRunner.query(`ALTER TABLE "protein_sector" RENAME COLUMN "id_proteinsector" TO "id_protein_sector"`);
        await queryRunner.query(`ALTER TABLE "protein_sector" RENAME CONSTRAINT "PK_dcf1f20aafb391531533a38eae8" TO "PK_88a3260b9e5a4e42d24582ec07f"`);
        await queryRunner.query(`ALTER TABLE "clients" RENAME COLUMN "id_delivery_zones" TO "id_delivery_zone"`);
        await queryRunner.query(`CREATE TABLE "monthly_area_population_projection" ("id_month_area_pop_proj" uuid NOT NULL DEFAULT uuid_generate_v4(), "year" integer NOT NULL, "month" text NOT NULL, "projection" integer NOT NULL, "es_real" boolean NOT NULL, "id_commune" uuid NOT NULL, CONSTRAINT "PK_4e69d24d85bc65b7735a2d7b01c" PRIMARY KEY ("id_month_area_pop_proj"))`);
        await queryRunner.query(`CREATE TABLE "branch_offices" ("id_branch_offices" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, CONSTRAINT "PK_3a15afa54e89e47b5801e4ecffe" PRIMARY KEY ("id_branch_offices"))`);
        await queryRunner.query(`CREATE TABLE "monthly_communal_population_projection" ("id_month_com_pop_proj" uuid NOT NULL DEFAULT uuid_generate_v4(), "year" integer NOT NULL, "month" text NOT NULL, "projection" integer NOT NULL, "es_real" boolean NOT NULL, "id_commune" uuid NOT NULL, CONSTRAINT "PK_8253a91cac16367cecc29115524" PRIMARY KEY ("id_month_com_pop_proj"))`);
        await queryRunner.query(`CREATE TABLE "projected_consumptions" ("id_projected_consumptions" uuid NOT NULL DEFAULT uuid_generate_v4(), "year" integer NOT NULL, "month" text NOT NULL, "consumption" integer NOT NULL, "id_protein_sector" uuid NOT NULL, CONSTRAINT "PK_49bc00a020642c9f10b609d2ee7" PRIMARY KEY ("id_projected_consumptions"))`);
        await queryRunner.query(`CREATE TABLE "real_consumptions" ("id_real_consumptions" uuid NOT NULL DEFAULT uuid_generate_v4(), "year" integer NOT NULL, "month" text NOT NULL, "consumption" integer NOT NULL, "id_protein_sector" uuid NOT NULL, CONSTRAINT "PK_beffd0959241e305e6a6ab8fb15" PRIMARY KEY ("id_real_consumptions"))`);
        await queryRunner.query(`CREATE TABLE "sales" ("id_sales" uuid NOT NULL DEFAULT uuid_generate_v4(), "year" integer NOT NULL, "month" text NOT NULL, "sales_kg" text NOT NULL, "sales_neta" text NOT NULL, "id_protein_sector" uuid NOT NULL, "id_client" uuid NOT NULL, CONSTRAINT "PK_caec05b46baff462e01fbce6bad" PRIMARY KEY ("id_sales"))`);
        await queryRunner.query(`ALTER TABLE "area" DROP COLUMN "isUrban"`);
        await queryRunner.query(`ALTER TABLE "communes" ADD "id_branch_offices" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "area" ADD "is_urban" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "area" ADD "id_district" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "monthly_area_population_projection" ADD CONSTRAINT "FK_f1e64f31a236009f6d74edee111" FOREIGN KEY ("id_commune") REFERENCES "district"("id_district") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "monthly_communal_population_projection" ADD CONSTRAINT "FK_7e14d6dfe66be65ba076730ec9e" FOREIGN KEY ("id_commune") REFERENCES "communes"("id_commune") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "communes" ADD CONSTRAINT "FK_3eb488bd6ad4c12befaf595140d" FOREIGN KEY ("id_branch_offices") REFERENCES "branch_offices"("id_branch_offices") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "projected_consumptions" ADD CONSTRAINT "FK_9a58d9dac176ba6a7ce0fc4aa3a" FOREIGN KEY ("id_protein_sector") REFERENCES "protein_sector"("id_protein_sector") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_consumptions" ADD CONSTRAINT "FK_7be9b372c6e8bd9d5045d9f6947" FOREIGN KEY ("id_protein_sector") REFERENCES "protein_sector"("id_protein_sector") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_c8e8562fd170f86d717bb33cfac" FOREIGN KEY ("id_protein_sector") REFERENCES "protein_sector"("id_protein_sector") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_c62b2bcdf3a765b920de433e8da" FOREIGN KEY ("id_client") REFERENCES "clients"("id_client") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "FK_3091fc5b4910b498c60d17624c9" FOREIGN KEY ("id_delivery_zone") REFERENCES "delivery_zone"("id_delivery_zone") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "area" ADD CONSTRAINT "FK_15e94351f66864e11b026b9b05e" FOREIGN KEY ("id_district") REFERENCES "district"("id_district") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "area" DROP CONSTRAINT "FK_15e94351f66864e11b026b9b05e"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "FK_3091fc5b4910b498c60d17624c9"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_c62b2bcdf3a765b920de433e8da"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_c8e8562fd170f86d717bb33cfac"`);
        await queryRunner.query(`ALTER TABLE "real_consumptions" DROP CONSTRAINT "FK_7be9b372c6e8bd9d5045d9f6947"`);
        await queryRunner.query(`ALTER TABLE "projected_consumptions" DROP CONSTRAINT "FK_9a58d9dac176ba6a7ce0fc4aa3a"`);
        await queryRunner.query(`ALTER TABLE "communes" DROP CONSTRAINT "FK_3eb488bd6ad4c12befaf595140d"`);
        await queryRunner.query(`ALTER TABLE "monthly_communal_population_projection" DROP CONSTRAINT "FK_7e14d6dfe66be65ba076730ec9e"`);
        await queryRunner.query(`ALTER TABLE "monthly_area_population_projection" DROP CONSTRAINT "FK_f1e64f31a236009f6d74edee111"`);
        await queryRunner.query(`ALTER TABLE "area" DROP COLUMN "id_district"`);
        await queryRunner.query(`ALTER TABLE "area" DROP COLUMN "is_urban"`);
        await queryRunner.query(`ALTER TABLE "communes" DROP COLUMN "id_branch_offices"`);
        await queryRunner.query(`ALTER TABLE "area" ADD "isUrban" boolean NOT NULL`);
        await queryRunner.query(`DROP TABLE "sales"`);
        await queryRunner.query(`DROP TABLE "real_consumptions"`);
        await queryRunner.query(`DROP TABLE "projected_consumptions"`);
        await queryRunner.query(`DROP TABLE "monthly_communal_population_projection"`);
        await queryRunner.query(`DROP TABLE "branch_offices"`);
        await queryRunner.query(`DROP TABLE "monthly_area_population_projection"`);
        await queryRunner.query(`ALTER TABLE "clients" RENAME COLUMN "id_delivery_zone" TO "id_delivery_zones"`);
        await queryRunner.query(`ALTER TABLE "protein_sector" RENAME CONSTRAINT "PK_88a3260b9e5a4e42d24582ec07f" TO "PK_dcf1f20aafb391531533a38eae8"`);
        await queryRunner.query(`ALTER TABLE "protein_sector" RENAME COLUMN "id_protein_sector" TO "id_proteinsector"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "FK_fd6e686834131a5a8a51e39ef00" FOREIGN KEY ("id_delivery_zones") REFERENCES "delivery_zone"("id_delivery_zone") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
