import { MigrationInterface, QueryRunner } from "typeorm";

export class regions1666930519213 implements MigrationInterface {
    name = 'regions1666930519213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "regions" ("region_number" integer NOT NULL, "name" text, CONSTRAINT "PK_645d5b29e67eca3fb73ac839155" PRIMARY KEY ("region_number"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "regions"`);
    }

}
