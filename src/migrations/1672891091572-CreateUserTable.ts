import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable1672891091572 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    {
                        name: 'username',
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                    },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user', true);
    }
}
