import { Expose } from 'class-transformer';

export class UsernameResponse {
    @Expose()
    username: string;
}