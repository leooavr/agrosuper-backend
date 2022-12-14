import { MigrationInterface, QueryRunner } from 'typeorm';

export class changeTypePkBranchOffice1670989430085
  implements MigrationInterface
{
  name = 'changeTypePkBranchOffice1670989430085';

  public async up(queryRunner: QueryRunner): Promise<void> {
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
      `ALTER TABLE "branch_offices" ADD "id_branch_offices" text NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "branch_offices" ADD CONSTRAINT "PK_3a15afa54e89e47b5801e4ecffe" PRIMARY KEY ("id_branch_offices")`,
    );
    await queryRunner.query(
      `ALTER TABLE "communes" DROP COLUMN "id_branch_offices"`,
    );
    await queryRunner.query(
      `ALTER TABLE "communes" ADD "id_branch_offices" text NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "communes" ADD CONSTRAINT "FK_3eb488bd6ad4c12befaf595140d" FOREIGN KEY ("id_branch_offices") REFERENCES "branch_offices"("id_branch_offices") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "communes" DROP CONSTRAINT "FK_3eb488bd6ad4c12befaf595140d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "communes" DROP COLUMN "id_branch_offices"`,
    );
    await queryRunner.query(
      `ALTER TABLE "communes" ADD "id_branch_offices" integer NOT NULL`,
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
      `ALTER TABLE "communes" ADD CONSTRAINT "FK_3eb488bd6ad4c12befaf595140d" FOREIGN KEY ("id_branch_offices") REFERENCES "branch_offices"("id_branch_offices") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
