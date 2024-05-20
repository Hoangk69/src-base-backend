import { ApiError } from '@models/api.error';
import { BadRequestError } from '@models/bad-request.error';
import { ResponseCodeEnum } from '@models/enum/response-code.enum';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError, ValidatorOptions } from 'class-validator';

export type ClassType<T> = new (...args: any[]) => T;

function getMessage(errors: ValidationError[]): string {
    const error = errors[0];
    if (!error) return 'Unknown error';

    if (!error.children?.length) {
        return Object.values(error.constraints ?? {})[0];
    }

    return getMessage(error.children);
}

export async function transformAndValidate<T extends object>(
    cls: ClassType<T>,
    plain: any | any[],
    validatorOptions: ValidatorOptions = {}
): Promise<T> {
    const transformed = plainToClass(cls, plain);

    if (Array.isArray(transformed)) {
        throw new ApiError(ResponseCodeEnum.BAD_REQUEST, 'Only accept object');
    }

    const errors = await validate(transformed, {
        ...validatorOptions,
        whitelist: true,
    });

    if (errors.length) {
        // logger.info(errors);
        throw new BadRequestError(
            ResponseCodeEnum.BAD_REQUEST,
            getMessage(errors)
        ).debug(errors);
    }

    return transformed;
}
