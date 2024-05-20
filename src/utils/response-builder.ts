import { getMessage, ResponseCodeEnum } from '@models/enum/response-code.enum';
import { ResponseTypeEnum } from '@models/enum/response-type.enum';
import { ResponsePayload } from '@models/response-payload';

export class ResponseBuilder<T> {
    private payload: ResponsePayload<T> = {
        type: ResponseTypeEnum.Success,
    };

    constructor(data?: T) {
        this.payload.data = data;
    }

    success(): ResponseBuilder<T> {
        this.payload.type = ResponseTypeEnum.Success;
        return this;
    }

    error(): ResponseBuilder<T> {
        this.payload.type = ResponseTypeEnum.Error;
        return this;
    }

    withCode(code: ResponseCodeEnum): ResponseBuilder<T> {
        this.payload.code = code;
        this.payload.message = getMessage(code);
        return this;
    }

    withMessage(message: string): ResponseBuilder<T> {
        this.payload.message = message;
        return this;
    }

    withData(data: T): ResponseBuilder<T> {
        this.payload.data = data;
        return this;
    }

    withMeta(meta: unknown): ResponseBuilder<T> {
        this.payload.meta = meta;
        return this;
    }

    withDebug(debug: unknown): ResponseBuilder<T> {
        this.payload.__debug__ = debug;
        return this;
    }

    build(): ResponsePayload<T> {
        return this.payload;
    }
}
