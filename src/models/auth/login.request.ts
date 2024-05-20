import { DeviceTypeEnum } from '@models/enum/device-type.enum';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class LoginRequest {
    @IsNotEmpty()
    @IsString()
    userId: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    // @IsOptional()
    // deviceId: string;

    @IsOptional()
    deviceType: DeviceTypeEnum;

    // @IsOptional()
    // deviceToken: string;
}
