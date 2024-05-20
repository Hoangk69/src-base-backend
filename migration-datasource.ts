import 'reflect-metadata';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { parse, ConnectionOptions as parseOptions } from 'pg-connection-string';
import * as entities from './src/entities/index';
import * as migrations from './src/migrations/index';

interface CustomOptions extends parseOptions {
    schema: string;
}
dotenv.config();
const db = parse(process.env.DATABASE_URL as string) as CustomOptions;

const AppDataSource = new DataSource({
    type: 'postgres',
    host: db.host ?? undefined,
    port: Number(db.port) ?? 5432,
    username: db.user,
    password: db.password,
    database: db.database ?? undefined,
    schema: db.schema,
    logging: true,
    entities: entities,
    subscribers: [],
    migrations: migrations,
    synchronize: false
});

AppDataSource.initialize();
export default AppDataSource;
