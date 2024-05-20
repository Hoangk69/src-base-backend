import { IsString, IsNotEmpty } from 'class-validator';

export class LoginAdminRequest {
    @IsNotEmpty()
    @IsString()
    password: string;
}
