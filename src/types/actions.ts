import { User } from '../types/User';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const VERIFY_REQUEST = 'VERIFY_REQUEST';
export const VERIFY_SUCCESS = 'VERIFY_SUCCESS';

export interface RequestLoginAction {
    type: typeof LOGIN_REQUEST;
}

export interface ReceiveLoginAction {
    type: typeof LOGIN_SUCCESS;
    user: User;
}

export interface LoginFailureAction {
    type: typeof LOGIN_FAILURE;
    error: Error;
}

export interface RequestLogoutAction {
    type: typeof LOGOUT_REQUEST;
}

export interface ReceiveLogoutAction {
    type: typeof LOGOUT_SUCCESS;
}

export interface LogoutFailureAction {
    type: typeof LOGOUT_FAILURE;
    error: Error;
}

export interface VerifyRequestAction {
    type: typeof VERIFY_REQUEST;
}

export interface VerifySuccessAction {
    type: typeof VERIFY_SUCCESS;
}

export type AuthActionTypes =
    | RequestLoginAction
    | ReceiveLoginAction
    | LoginFailureAction
    | RequestLogoutAction
    | ReceiveLogoutAction
    | LogoutFailureAction
    | VerifyRequestAction
    | VerifySuccessAction;

export type AppActions = AuthActionTypes;
