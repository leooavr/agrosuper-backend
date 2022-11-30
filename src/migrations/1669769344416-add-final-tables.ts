import { MigrationInterface, QueryRunner } from 'typeorm';

export class addFinalTables1669769344416 implements MigrationInterface {
  name = 'addFinalTables1669769344416';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "local_client"`);
    await queryRunner.query(
      `ALTER TABLE "communes" DROP CONSTRAINT "FK_c4315463e39f82ad2837d46ba62"`,
    );
    await queryRunner.query(
      `ALTER TABLE "provinces" DROP CONSTRAINT "PK_3b79e7c6885931710f025c523e6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "provinces" DROP COLUMN "id_province"`,
    );
    await queryRunner.query(
      `ALTER TABLE "provinces" ADD "id_province" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "provinces" ADD CONSTRAINT "PK_3b79e7c6885931710f025c523e6" PRIMARY KEY ("id_province")`,
    );
    await queryRunner.query(
      `ALTER TABLE "districts" DROP CONSTRAINT "FK_638b3ce334d7d51abe59cd451af"`,
    );
    await queryRunner.query(`ALTER TABLE "districts" DROP COLUMN "id_commune"`);
    await queryRunner.query(
      `ALTER TABLE "districts" ADD "id_commune" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "delivery_zones" DROP CONSTRAINT "FK_22f599b013973acd9250ec02ec3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "delivery_zones" DROP COLUMN "id_commune"`,
    );
    await queryRunner.query(
      `ALTER TABLE "delivery_zones" ADD "id_commune" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "communes" DROP CONSTRAINT "FK_3eb488bd6ad4c12befaf595140d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "branch_offices" DROP CONSTRAINT "PK_3a15afa54e89e47b5801e4ecffe"`,
    );
    await queryRunner.query(
      `ALTER TABLE "branch_offices" DROP COLUMN "id_branch_offices"`,
    );
    await queryRunner.query(
      `ALTER TABLE "branch_offices" ADD "id_branch_offices" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "branch_offices" ADD CONSTRAINT "PK_3a15afa54e89e47b5801e4ecffe" PRIMARY KEY ("id_branch_offices")`,
    );
    await queryRunner.query(
      `ALTER TABLE "monthly_communal_population_projections" DROP CONSTRAINT "FK_63cbb8bc5f78bcceecfe82ac5a4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "monthly_communal_population_projections" DROP COLUMN "id_commune"`,
    );
    await queryRunner.query(
      `ALTER TABLE "monthly_communal_population_projections" ADD "id_commune" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "clients" DROP CONSTRAINT "FK_08c21400dac370ccc702e15ae72"`,
    );
    await queryRunner.query(
      `ALTER TABLE "communes" DROP CONSTRAINT "PK_6f70cdac00334844a6d16ed45b1"`,
    );
    await queryRunner.query(`ALTER TABLE "communes" DROP COLUMN "id_commune"`);
    await queryRunner.query(
      `ALTER TABLE "communes" ADD "id_commune" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "communes" ADD CONSTRAINT "PK_6f70cdac00334844a6d16ed45b1" PRIMARY KEY ("id_commune")`,
    );
    await queryRunner.query(`ALTER TABLE "communes" DROP COLUMN "id_province"`);
    await queryRunner.query(
      `ALTER TABLE "communes" ADD "id_province" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "communes" DROP COLUMN "id_branch_offices"`,
    );
    await queryRunner.query(
      `ALTER TABLE "communes" ADD "id_branch_offices" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "projected_consumptions" DROP CONSTRAINT "FK_9a58d9dac176ba6a7ce0fc4aa3a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "projected_consumptions" DROP COLUMN "id_protein_sector"`,
    );
    await queryRunner.query(
      `ALTER TABLE "projected_consumptions" ADD "id_protein_sector" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "real_consumptions" DROP CONSTRAINT "FK_7be9b372c6e8bd9d5045d9f6947"`,
    );
    await queryRunner.query(
      `ALTER TABLE "real_consumptions" DROP COLUMN "id_protein_sector"`,
    );
    await queryRunner.query(
      `ALTER TABLE "real_consumptions" ADD "id_protein_sector" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "sales" DROP CONSTRAINT "FK_c8e8562fd170f86d717bb33cfac"`,
    );
    await queryRunner.query(
      `ALTER TABLE "protein_sectors" DROP CONSTRAINT "PK_20d543031feb40b62ef16f5845f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "protein_sectors" DROP COLUMN "id_protein_sector"`,
    );
    await queryRunner.query(
      `ALTER TABLE "protein_sectors" ADD "id_protein_sector" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "protein_sectors" ADD CONSTRAINT "PK_20d543031feb40b62ef16f5845f" PRIMARY KEY ("id_protein_sector")`,
    );
    await queryRunner.query(
      `ALTER TABLE "sales" DROP COLUMN "id_protein_sector"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sales" ADD "id_protein_sector" integer NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "id_commune"`);
    await queryRunner.query(
      `ALTER TABLE "clients" ADD "id_commune" integer NOT NULL`,
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
      `ALTER TABLE "clients" ADD CONSTRAINT "FK_08c21400dac370ccc702e15ae72" FOREIGN KEY ("id_commune") REFERENCES "communes"("id_commune") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "clients" DROP CONSTRAINT "FK_08c21400dac370ccc702e15ae72"`,
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
    await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "id_commune"`);
    await queryRunner.query(
      `ALTER TABLE "clients" ADD "id_commune" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "sales" DROP COLUMN "id_protein_sector"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sales" ADD "id_protein_sector" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "protein_sectors" DROP CONSTRAINT "PK_20d543031feb40b62ef16f5845f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "protein_sectors" DROP COLUMN "id_protein_sector"`,
    );
    await queryRunner.query(
      `ALTER TABLE "protein_sectors" ADD "id_protein_sector" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "protein_sectors" ADD CONSTRAINT "PK_20d543031feb40b62ef16f5845f" PRIMARY KEY ("id_protein_sector")`,
    );
    await queryRunner.query(
      `ALTER TABLE "sales" ADD CONSTRAINT "FK_c8e8562fd170f86d717bb33cfac" FOREIGN KEY ("id_protein_sector") REFERENCES "protein_sectors"("id_protein_sector") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "real_consumptions" DROP COLUMN "id_protein_sector"`,
    );
    await queryRunner.query(
      `ALTER TABLE "real_consumptions" ADD "id_protein_sector" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "real_consumptions" ADD CONSTRAINT "FK_7be9b372c6e8bd9d5045d9f6947" FOREIGN KEY ("id_protein_sector") REFERENCES "protein_sectors"("id_protein_sector") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "projected_consumptions" DROP COLUMN "id_protein_sector"`,
    );
    await queryRunner.query(
      `ALTER TABLE "projected_consumptions" ADD "id_protein_sector" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "projected_consumptions" ADD CONSTRAINT "FK_9a58d9dac176ba6a7ce0fc4aa3a" FOREIGN KEY ("id_protein_sector") REFERENCES "protein_sectors"("id_protein_sector") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "communes" DROP COLUMN "id_branch_offices"`,
    );
    await queryRunner.query(
      `ALTER TABLE "communes" ADD "id_branch_offices" uuid NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "communes" DROP COLUMN "id_province"`);
    await queryRunner.query(
      `ALTER TABLE "communes" ADD "id_province" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "communes" DROP CONSTRAINT "PK_6f70cdac00334844a6d16ed45b1"`,
    );
    await queryRunner.query(`ALTER TABLE "communes" DROP COLUMN "id_commune"`);
    await queryRunner.query(
      `ALTER TABLE "communes" ADD "id_commune" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "communes" ADD CONSTRAINT "PK_6f70cdac00334844a6d16ed45b1" PRIMARY KEY ("id_commune")`,
    );
    await queryRunner.query(
      `ALTER TABLE "clients" ADD CONSTRAINT "FK_08c21400dac370ccc702e15ae72" FOREIGN KEY ("id_commune") REFERENCES "communes"("id_commune") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "monthly_communal_population_projections" DROP COLUMN "id_commune"`,
    );
    await queryRunner.query(
      `ALTER TABLE "monthly_communal_population_projections" ADD "id_commune" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "monthly_communal_population_projections" ADD CONSTRAINT "FK_63cbb8bc5f78bcceecfe82ac5a4" FOREIGN KEY ("id_commune") REFERENCES "communes"("id_commune") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "branch_offices" DROP CONSTRAINT "PK_3a15afa54e89e47b5801e4ecffe"`,
    );
    await queryRunner.query(
      `ALTER TABLE "branch_offices" DROP COLUMN "id_branch_offices"`,
    );
    await queryRunner.query(
      `ALTER TABLE "branch_offices" ADD "id_branch_offices" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "branch_offices" ADD CONSTRAINT "PK_3a15afa54e89e47b5801e4ecffe" PRIMARY KEY ("id_branch_offices")`,
    );
    await queryRunner.query(
      `ALTER TABLE "communes" ADD CONSTRAINT "FK_3eb488bd6ad4c12befaf595140d" FOREIGN KEY ("id_branch_offices") REFERENCES "branch_offices"("id_branch_offices") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "delivery_zones" DROP COLUMN "id_commune"`,
    );
    await queryRunner.query(
      `ALTER TABLE "delivery_zones" ADD "id_commune" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "delivery_zones" ADD CONSTRAINT "FK_22f599b013973acd9250ec02ec3" FOREIGN KEY ("id_commune") REFERENCES "communes"("id_commune") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(`ALTER TABLE "districts" DROP COLUMN "id_commune"`);
    await queryRunner.query(
      `ALTER TABLE "districts" ADD "id_commune" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "districts" ADD CONSTRAINT "FK_638b3ce334d7d51abe59cd451af" FOREIGN KEY ("id_commune") REFERENCES "communes"("id_commune") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "provinces" DROP CONSTRAINT "PK_3b79e7c6885931710f025c523e6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "provinces" DROP COLUMN "id_province"`,
    );
    await queryRunner.query(
      `ALTER TABLE "provinces" ADD "id_province" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "provinces" ADD CONSTRAINT "PK_3b79e7c6885931710f025c523e6" PRIMARY KEY ("id_province")`,
    );
    await queryRunner.query(
      `ALTER TABLE "communes" ADD CONSTRAINT "FK_c4315463e39f82ad2837d46ba62" FOREIGN KEY ("id_province") REFERENCES "provinces"("id_province") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "clients" ADD "local_client" bigint NOT NULL`,
    );
  }
}
