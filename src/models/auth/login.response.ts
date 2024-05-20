import { Expose } from 'class-transformer';
import { UserInfo } from './user-info';

export class LoginResponse {
    @Expose()
    user: UserInfo;

    @Expose()
    accessToken: string;

    @Expose()
    refreshToken: string;
}
