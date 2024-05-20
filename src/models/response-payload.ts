import { ResponseCodeEnum } from '@models/enum/response-code.enum';
import { ResponseTypeEnum } from '@models/enum/response-type.enum';

export interface ResponsePayload<T> {
    type: ResponseTypeEnum;
    code?: ResponseCodeEnum;
    message?: string;
    data?: T;
    meta?: unknown;
    __debug__?: unknown;
}
