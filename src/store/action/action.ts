import { Action } from '@ngrx/store';
import { user } from '../reducer/reducer';
//Constantes de acciones
export const LOGIN = '[Cosa] LOGIN';
export const LOGIN_SUCCESS = '[Cosa] LOGIN_SUCCESS';
export const LOGIN_FAILED = '[Cosa] LOGIN_FAILED';
export const LOGOUT = '[Cosa] LOGOUT';
export const LOGOUT_SUCCESS = '[Cosa] LOGOUT_SUCCESS';
export const LOGOUT_FAILED = '[Cosa] LOGOUT_FAILED';
export const UPDATE = '[Cosa] UPDATE';
export const UPDATE_SUCCESS = '[Cosa] UPDATE_SUCCESS';
export const UPDATE_FAILED = '[Cosa] UPDATE_FAILED';
//Acciones
export class Login implements Action {
    readonly type = LOGIN;

    constructor(public payload: { User: user }) { }
}
export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;

    constructor(public payload: { User: user }) { }
}
export class LoginFailed implements Action {
    readonly type = LOGIN_FAILED;

    constructor(public payload: { User: user }) { }
}
export class Logout implements Action {
    readonly type = LOGOUT;

    constructor(public payload: string) { }
}
export class LogoutSuccess implements Action {
    readonly type = LOGOUT_SUCCESS;

    constructor(public payload: string) { }
}
export class LogoutFailed implements Action {
    readonly type = LOGOUT_FAILED;

    constructor(public payload: string) { }
}
ME HE QUEDADO AQUI
export class Update implements Action {
    readonly type = UPDATE;

    constructor(public payload: string) { }
}
export class UpdatetSuccess implements Action {
    readonly type = UPDATE_SUCCESS;

    constructor(public payload: { User: { password: string, changes: user } }) { }
}
export class UpdateFailed implements Action {
    readonly type = UPDATE_FAILED;

    constructor(public payload: string) { }
}
export type All =
    Login
    | LoginSuccess
    | LoginFailed
    | Logout
    | LogoutSuccess
    | LogoutFailed
    | Update
    | UpdatetSuccess
    | UpdateFailed;