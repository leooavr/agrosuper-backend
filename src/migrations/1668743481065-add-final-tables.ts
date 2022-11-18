import { MigrationInterface, QueryRunner } from 'typeorm';

export class addFinalTables1668743481065 implements MigrationInterface {
  name = 'addFinalTables1668743481065';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "sales_channel" ("id_sales_channel" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, CONSTRAINT "PK_26f2bbde893009ec195a37666a2" PRIMARY KEY ("id_sales_channel"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "regions" ("id_region" integer NOT NULL, "name" text, CONSTRAINT "PK_c5101628875d5150d9dc70edc1c" PRIMARY KEY ("id_region"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "provinces" ("id_province" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text, "id_region" integer NOT NULL, CONSTRAINT "PK_3b79e7c6885931710f025c523e6" PRIMARY KEY ("id_province"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "monthly_area_population_projections" ("id_month_area_pop_proj" uuid NOT NULL DEFAULT uuid_generate_v4(), "year" integer NOT NULL, "month" text NOT NULL, "projection" integer NOT NULL, "es_real" boolean NOT NULL, "id_district" uuid NOT NULL, CONSTRAINT "PK_8db959428b82be954f2e9ae3c13" PRIMARY KEY ("id_month_area_pop_proj"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "districts" ("id_district" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "id_commune" uuid NOT NULL, CONSTRAINT "PK_072fbacbd757a33948ddad27ac7" PRIMARY KEY ("id_district"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "delivery_zones" ("id_delivery_zone" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "id_commune" uuid NOT NULL, CONSTRAINT "PK_6fd2ed64ec1d4f935f38870f742" PRIMARY KEY ("id_delivery_zone"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "branch_offices" ("id_branch_offices" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, CONSTRAINT "PK_3a15afa54e89e47b5801e4ecffe" PRIMARY KEY ("id_branch_offices"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "monthly_communal_population_projections" ("id_month_com_pop_proj" uuid NOT NULL DEFAULT uuid_generate_v4(), "year" integer NOT NULL, "month" text NOT NULL, "projection" integer NOT NULL, "is_real" boolean NOT NULL, "id_commune" uuid NOT NULL, CONSTRAINT "PK_4ba9822466d9ba0dc53ce330154" PRIMARY KEY ("id_month_com_pop_proj"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "communes" ("id_commune" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "id_province" uuid NOT NULL, "id_branch_offices" uuid NOT NULL, CONSTRAINT "PK_6f70cdac00334844a6d16ed45b1" PRIMARY KEY ("id_commune"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "projected_consumptions" ("id_projected_consumptions" uuid NOT NULL DEFAULT uuid_generate_v4(), "year" integer NOT NULL, "month" text NOT NULL, "consumption" integer NOT NULL, "id_protein_sector" uuid NOT NULL, CONSTRAINT "PK_49bc00a020642c9f10b609d2ee7" PRIMARY KEY ("id_projected_consumptions"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "real_consumptions" ("id_real_consumptions" uuid NOT NULL DEFAULT uuid_generate_v4(), "year" integer NOT NULL, "month" text NOT NULL, "consumption" integer NOT NULL, "id_protein_sector" uuid NOT NULL, CONSTRAINT "PK_beffd0959241e305e6a6ab8fb15" PRIMARY KEY ("id_real_consumptions"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "protein_sectors" ("id_protein_sector" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, CONSTRAINT "PK_20d543031feb40b62ef16f5845f" PRIMARY KEY ("id_protein_sector"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "sales" ("id_sales" uuid NOT NULL DEFAULT uuid_generate_v4(), "year" integer NOT NULL, "month" text NOT NULL, "sales_kg" integer NOT NULL, "sales_neta" integer NOT NULL, "id_protein_sector" uuid NOT NULL, "id_client" uuid NOT NULL, CONSTRAINT "PK_caec05b46baff462e01fbce6bad" PRIMARY KEY ("id_sales"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "clients" ("id_client" uuid NOT NULL DEFAULT uuid_generate_v4(), "rut" text NOT NULL, "address" text NOT NULL, "lat" text NOT NULL, "long" text NOT NULL, "social_reason" text NOT NULL, "local_client" bigint NOT NULL, "id_commune" uuid NOT NULL, "id_sales_channel" uuid NOT NULL, "id_delivery_zone" uuid NOT NULL, "id_area" uuid NOT NULL, CONSTRAINT "PK_59bc814de9b1855a712531853aa" PRIMARY KEY ("id_client"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "areas" ("id_area" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "surface" text NOT NULL, "is_urban" boolean NOT NULL, "participation" text NOT NULL, "id_area_category" uuid NOT NULL, "id_district" uuid NOT NULL, CONSTRAINT "PK_9d2a9f5b563d6a8a9703a8fa9cd" PRIMARY KEY ("id_area"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "areas_category" ("id_area_category" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, CONSTRAINT "PK_7334445f14be37daabb624131b4" PRIMARY KEY ("id_area_category"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "provinces" ADD CONSTRAINT "FK_32880d128bde85acb530706930f" FOREIGN KEY ("id_region") REFERENCES "regions"("id_region") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "monthly_area_population_projections" ADD CONSTRAINT "FK_fc08afa3fe51f24398dc4c099fe" FOREIGN KEY ("id_district") REFERENCES "districts"("id_district") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "districts" ADD CONSTRAINT "FK_638b3ce334d7d51abe59cd451af" FOREIGN KEY ("id_commune") REFERENCES "communes"("id_commune") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "delivery_zones" ADD CONSTRAINT "FK_22f599b013973acd9250ec02ec3" FOREIGN KEY ("id_commune") REFERENCES "communes"("id_commune") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "monthly_communal_population_projections" ADD CONSTRAINT "FK_63cbb8bc5f78bcceecfe82ac5a4" FOREIGN KEY ("id_commune") REFERENCES "communes"("id_commune") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "communes" ADD CONSTRAINT "FK_c4315463e39f82ad2837d46ba62" FOREIGN KEY ("id_province") REFERENCES "provinces"("id_province") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "communes" ADD CONSTRAINT "FK_3eb488bd6ad4c12befaf595140d" FOREIGN KEY ("id_branch_offices") REFERENCES "branch_offices"("id_branch_offices") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "projected_consumptions" ADD CONSTRAINT "FK_9a58d9dac176ba6a7ce0fc4aa3a" FOREIGN KEY ("id_protein_sector") REFERENCES "protein_sectors"("id_protein_sector") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "real_consumptions" ADD CONSTRAINT "FK_7be9b372c6e8bd9d5045d9f6947" FOREIGN KEY ("id_protein_sector") REFERENCES "protein_sectors"("id_protein_sector") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "sales" ADD CONSTRAINT "FK_c8e8562fd170f86d717bb33cfac" FOREIGN KEY ("id_protein_sector") REFERENCES "protein_sectors"("id_protein_sector") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "sales" ADD CONSTRAINT "FK_c62b2bcdf3a765b920de433e8da" FOREIGN KEY ("id_client") REFERENCES "clients"("id_client") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "clients" ADD CONSTRAINT "FK_08c21400dac370ccc702e15ae72" FOREIGN KEY ("id_commune") REFERENCES "communes"("id_commune") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "clients" ADD CONSTRAINT "FK_df69d41da1942de3419b9b3173e" FOREIGN KEY ("id_sales_channel") REFERENCES "sales_channel"("id_sales_channel") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "clients" ADD CONSTRAINT "FK_3091fc5b4910b498c60d17624c9" FOREIGN KEY ("id_delivery_zone") REFERENCES "delivery_zones"("id_delivery_zone") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "clients" ADD CONSTRAINT "FK_309253e25af06778a7b93e45087" FOREIGN KEY ("id_area") REFERENCES "areas"("id_area") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "areas" ADD CONSTRAINT "FK_6b550b85fd01417c2b5d47aa4a4" FOREIGN KEY ("id_area_category") REFERENCES "areas_category"("id_area_category") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "areas" ADD CONSTRAINT "FK_345a2fc9ca94b954e40e9320526" FOREIGN KEY ("id_district") REFERENCES "districts"("id_district") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "areas" DROP CONSTRAINT "FK_345a2fc9ca94b954e40e9320526"`,
    );
    await queryRunner.query(
      `ALTER TABLE "areas" DROP CONSTRAINT "FK_6b550b85fd01417c2b5d47aa4a4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "clients" DROP CONSTRAINT "FK_309253e25af06778a7b93e45087"`,
    );
    await queryRunner.query(
      `ALTER TABLE "clients" DROP CONSTRAINT "FK_3091fc5b4910b498c60d17624c9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "clients" DROP CONSTRAINT "FK_df69d41da1942de3419b9b3173e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "clients" DROP CONSTRAINT "FK_08c21400dac370ccc702e15ae72"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sales" DROP CONSTRAINT "FK_c62b2bcdf3a765b920de433e8da"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sales" DROP CONSTRAINT "FK_c8e8562fd170f86d717bb33cfac"`,
    );
    await queryRunner.query(
      `ALTER TABLE "real_consumptions" DROP CONSTRAINT "FK_7be9b372c6e8bd9d5045d9f6947"`,
    );
    await queryRunner.query(
      `ALTER TABLE "projected_consumptions" DROP CONSTRAINT "FK_9a58d9dac176ba6a7ce0fc4aa3a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "communes" DROP CONSTRAINT "FK_3eb488bd6ad4c12befaf595140d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "communes" DROP CONSTRAINT "FK_c4315463e39f82ad2837d46ba62"`,
    );
    await queryRunner.query(
      `ALTER TABLE "monthly_communal_population_projections" DROP CONSTRAINT "FK_63cbb8bc5f78bcceecfe82ac5a4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "delivery_zones" DROP CONSTRAINT "FK_22f599b013973acd9250ec02ec3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "districts" DROP CONSTRAINT "FK_638b3ce334d7d51abe59cd451af"`,
    );
    await queryRunner.query(
      `ALTER TABLE "monthly_area_population_projections" DROP CONSTRAINT "FK_fc08afa3fe51f24398dc4c099fe"`,
    );
    await queryRunner.query(
      `ALTER TABLE "provinces" DROP CONSTRAINT "FK_32880d128bde85acb530706930f"`,
    );
    await queryRunner.query(`DROP TABLE "areas_category"`);
    await queryRunner.query(`DROP TABLE "areas"`);
    await queryRunner.query(`DROP TABLE "clients"`);
    await queryRunner.query(`DROP TABLE "sales"`);
    await queryRunner.query(`DROP TABLE "protein_sectors"`);
    await queryRunner.query(`DROP TABLE "real_consumptions"`);
    await queryRunner.query(`DROP TABLE "projected_consumptions"`);
    await queryRunner.query(`DROP TABLE "communes"`);
    await queryRunner.query(
      `DROP TABLE "monthly_communal_population_projections"`,
    );
    await queryRunner.query(`DROP TABLE "branch_offices"`);
    await queryRunner.query(`DROP TABLE "delivery_zones"`);
    await queryRunner.query(`DROP TABLE "districts"`);
    await queryRunner.query(`DROP TABLE "monthly_area_population_projections"`);
    await queryRunner.query(`DROP TABLE "provinces"`);
    await queryRunner.query(`DROP TABLE "regions"`);
    await queryRunner.query(`DROP TABLE "sales_channel"`);
  }
}
