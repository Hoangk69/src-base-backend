import { constants } from '@utils/constants';
import { Type } from 'class-transformer';
import { Allow } from 'class-validator';

export class PaginationQuery {
    @Allow()
    @Type(() => Number)
    page?: number;

    @Allow()
    @Type(() => Number)
    limit?: number;

    get take(): number {
        if (!this.limit) return constants.limit.default;
        const limit = Number(this.limit) || constants.limit.default;

        return limit > 0 && limit <= constants.limit.maximum
            ? limit
            : constants.limit.default;
    }

    get skip(): number {
        if (!this.page) return 0;
        const page = (Number(this.page) || 1) - 1;

        return (page < 0 ? 0 : page) * this.take;
    }
}
