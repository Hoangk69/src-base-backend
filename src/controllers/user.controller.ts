import Router from '@koa/router';
import { Context, ParameterizedContext } from 'koa';
import { AppState } from '@models/app.state';
import { Container } from 'typedi';
import { ResponseBuilder } from '@utils/response-builder';
import { UserService } from '@services/user.service';
import { transformAndValidate } from '@utils/validator';
import { CardBankRequest } from '@models/user/card-bank.request';

const userController = new Router({ prefix: '/auth' });

userController.post(
    '/user',
    async (ctx: ParameterizedContext<AppState, Context>): Promise<void> => {
        const request = await transformAndValidate<CardBankRequest>(
            CardBankRequest,
            ctx.request.body
        );
        const userService = Container.get(UserService);
        const data =  await userService.getAll(request);
        ctx.body = new ResponseBuilder(data).success().build();
    }
);

export { userController };
