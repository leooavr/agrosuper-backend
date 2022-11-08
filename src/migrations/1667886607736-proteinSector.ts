import { MigrationInterface, QueryRunner } from "typeorm";

export class proteinSector1667886607736 implements MigrationInterface {
    name = 'proteinSector1667886607736'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "protein_sector" ("id_proteinsector" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, CONSTRAINT "PK_dcf1f20aafb391531533a38eae8" PRIMARY KEY ("id_proteinsector"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "protein_sector"`);
    }

}
