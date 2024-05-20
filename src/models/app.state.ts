import { UserInfo } from './auth/user-info';

export interface AppState {
    user: UserInfo;
    token: string;
}
