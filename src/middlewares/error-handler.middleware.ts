import { logger } from '@config/logger';
import { ApiError } from '@models/api.error';
import { BadRequestError } from '@models/bad-request.error';
import { ResponseCodeEnum } from '@models/enum/response-code.enum';
import { Context, Middleware, Next } from 'koa';

export const errorHandlerMiddleware: Middleware = async (
    ctx: Context,
    next: Next
) => {
    try {
        await next();
    } catch (error) {
        if (error instanceof BadRequestError) {
            logger.info(error.message);
            ctx.body = error.toResponse();
        } else if (error instanceof ApiError) {
            if (error.errorCode != ResponseCodeEnum.UNAUTHORIZED)
                logger.error(error.stack);
            ctx.body = error.toResponse();
        } else {
            ctx.body = new ApiError(
                ResponseCodeEnum.INTERNAL_SERVER_ERROR
            ).toResponse();

            logger.error('Unhandled error: ', error, ctx);
        }
    }
};
