import { logger } from '@config/logger';
import { config } from '@config/app-config';
import pgp, { IEventContext } from 'pg-promise';
import { parse, ConnectionOptions as parseOptions } from 'pg-connection-string';
import { IConnectionParameters } from 'pg-promise/typescript/pg-subset';

interface CustomOptions extends parseOptions {
    schema: string;
}
const database = parse(process.env.DATABASE_URL as string) as CustomOptions;

const initOptions = {
    query(e: IEventContext) {
        if (config.query_log) logger.info(e.query);
    },

    error(err: any, e: IEventContext) {
        if (e.cn) {
            // this is a connection-related error
            // cn = safe connection details passed into the library:
            //      if password is present, it is masked by #

            logger.error('Connection-related error' + err);
        }

        if (e.query) {
            // query string is available
            if (e.params) {
                logger.error('Query string error' + err);
            }
        }

        if (e.ctx) {
            // occurred inside a task or transaction
            logger.error('Occurred inside a task or transaction' + err);
        }
    },

    capSQL: true,
};

export const schema = database.schema || 'public';

const connectionOptions: IConnectionParameters = {
    connectionString: config.databaseUrl,
    host: database.host ?? undefined,
    port: Number(database.port) ?? undefined,
    user: database.user,
    password: database.password,
    database: database.database ?? undefined,
    max: 3,
    idleTimeoutMillis: 5000,
};

const pg = pgp(initOptions);
const db = pg(connectionOptions);

export default db;
