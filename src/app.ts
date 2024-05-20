import dotenv from 'dotenv';
import serverless from 'serverless-http';
import { AppDataSource } from '@config/app-datasource';
import { config } from '@config/app-config';
import Koa, { Context } from 'koa';
import cors from '@koa/cors';
import { AppState } from '@models/app.state';
import koaBody from 'koa-body';
import Router from '@koa/router';
import { userController } from '@controllers/user.controller';
import { errorHandlerMiddleware } from './middlewares/error-handler.middleware';
import { loggerMiddleware } from './middlewares/logger.middleware';

const routers = [
  userController
];

dotenv.config();
const app = new Koa<AppState, Context>();
app.use(cors());
app.use(
    koaBody({
        jsonLimit: '4mb',
        multipart: true,
    })
);
const rootRouter = new Router();
routers.forEach((router) => {
    rootRouter.use(config.api_prefix, router.routes());
});
// error handle right before use router
app.use(errorHandlerMiddleware);
app.use(loggerMiddleware);
// app.use(Authorized());
app.use(rootRouter.routes());

const server = serverless(app);

export const handler = async (event: any, context: any): Promise<any> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }
    return await server(event, context);
};
