import { User } from "./user.model";

export enum AuthenticationStatus {
    Authenticated = "authenticated",
    NotAuthenticated = 'not-authenticated',
    Locked = 'Locked'
}
type AuthResponse = {
    status: AuthenticationStatus;
    userInfo?: User;
    token?: string;
}

export type {
    AuthResponse
}