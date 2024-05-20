import { DeviceTypeEnum } from '@models/enum/device-type.enum';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class RefreshTokenRequest {
    @IsNotEmpty()
    @IsString()
    refreshToken: string;

    @IsOptional()
    deviceType: DeviceTypeEnum;
}
