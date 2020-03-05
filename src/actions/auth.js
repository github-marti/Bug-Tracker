import { myFirebase } from '../firebase/firebase';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const VERIFY_REQUEST = 'VERIFY_REQUEST';
export const VERIFY_SUCCESS = 'VERIFY_SUCCESS';

const requestLogin = () => {
    return {
        type: LOGIN_REQUEST,
    };
};

const receiveLogin = user => {
    return {
        type: LOGIN_SUCCESS,
        user,
    };
};

const loginFailure = () => {
    return {
        type: LOGIN_FAILURE,
        error,
    };
};

const requestLogout = () => {
    return {
        type: LOGOUT_REQUEST,
    };
};

const receiveLogout = () => {
    return {
        type: LOGOUT_SUCCESS,
    };
};

const logoutFailure = () => {
    return {
        type: LOGOUT_FAILURE,
        error,
    };
};

const verifyRequest = () => {
    return {
        type: VERIFY_REQUEST,
    };
};

const verifySuccess = () => {
    return {
        type: VERIFY_SUCCESS,
    };
};
