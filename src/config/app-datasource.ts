import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { parse, ConnectionOptions as parseOptions } from 'pg-connection-string';
import { config } from './app-config';
import * as entities from '../entities/index';
import * as migrations from '../migrations/index';

interface CustomOptions extends parseOptions {
    schema: string;
}

const db = parse(config.databaseUrl as string) as CustomOptions;

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: db.host ?? undefined,
    port: Number(db.port) ?? 5432,
    username: db.user,
    password: db.password,
    database: db.database ?? undefined,
    schema: db.schema ?? 'public',
    logging: config.query_log ? true : ['error'],
    entities: entities,
    subscribers: [],
    migrations: migrations,
    synchronize: false
});
export const dbSchema = db.schema ?? 'public';
