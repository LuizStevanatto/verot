import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMovie1647198754949 implements MigrationInterface {
    private table = new Table({
        name: "movies",
        columns: [
            {
                name: "_id",
                type: "uuid",
                isPrimary: true,
            },
            {
                name: "name",
                type: "varchar",
            },
            {
                name: "gender",
                type: "varchar",
            },
            {
                name: "duration",
                type: "varchar",
            },
            {
                name: "classification",
                type: "varchar",
            },
            {
                name: "launch",
                type: "varchar",
            },
            {
                name: "synopsis",
                type: "varchar",
            },
            {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()'
            }
        ],
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
    }
}
