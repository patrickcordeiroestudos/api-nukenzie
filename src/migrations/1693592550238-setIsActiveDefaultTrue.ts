import { MigrationInterface, QueryRunner } from "typeorm";

export class SetIsActiveDefaultTrue1693592550238 implements MigrationInterface {
    name = 'SetIsActiveDefaultTrue1693592550238'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "budget" ALTER COLUMN "is_active" SET DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "budget" ALTER COLUMN "is_active" DROP DEFAULT`);
    }

}
