import { Expose } from 'class-transformer';

export class LoginAdminResponse {
    @Expose()
    token: string;
}
