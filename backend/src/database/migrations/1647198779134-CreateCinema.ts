import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCinema1647198779134 implements MigrationInterface {
    private table = new Table({
        name: "cinema",
        columns: [
            {
                name: "_id",
                type: "uuid",
                isPrimary: true,
                generationStrategy: "uuid",
            },
            {
                name: "name",
                type: "varchar",
            },
            {
                name: "city",
                type: "varchar",
            },
            {
                name: "state",
                type: "varchar",
            },
            {
                name: "created_at",
                type: "timestamp",
                default: "now()",
            },
        ],
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table, true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
    }
}
