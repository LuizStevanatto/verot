import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSession1647198788311 implements MigrationInterface {
    private table = new Table({
        name: "session",
        columns: [
            {
                name: "_id",
                type: "uuid",
                isPrimary: true,
            },
            {
                name: "cinema_id",
                type: "uuid",
            },
            {
                name: "movie_id",
                type: "uuid",
            },
            {
                name: "weekDay",
                type: "varchar",
            },
            {
                name: "schedule",
                type: "varchar",
            },
        ],
        foreignKeys: [
            {
                name: "fk_session_cimema",
                columnNames: ["cinema_id"],
                referencedTableName: "cinema",
                referencedColumnNames: ["_id"],
            },
            {
                name: "fk_session_movie",
                columnNames: ["movie_id"],
                referencedTableName: "movies",
                referencedColumnNames: ["_id"],
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
