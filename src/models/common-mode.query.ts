import {
    ContentViewModeEnum,
    RoleModeEnum as RoleModeEnum,
} from '@models/enum/view-mode.enum';
import { PaginationQuery } from '@models/pagination-query';
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class CommonModeQuery extends PaginationQuery {
    @IsOptional()
    @Type(() => Number)
    roleMode: RoleModeEnum;

    @IsOptional()
    @Type(() => Number)
    contentViewMode: ContentViewModeEnum;

    @IsOptional()
    shopCode: string;
}
