import { myFirebase } from '../firebase/firebase';
import { Dispatch } from 'redux';
import {
    AppActions,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    VERIFY_REQUEST,
    VERIFY_SUCCESS,
} from '../types/actions';

const requestLogin = (): AppActions => ({
    type: LOGIN_REQUEST,
});

const receiveLogin = (user: object): AppActions => {
    return {
        type: LOGIN_SUCCESS,
        user,
    };
};

const loginFailure = (error: Error): AppActions => {
    return {
        type: LOGIN_FAILURE,
        error,
    };
};

const requestLogout = (): AppActions => {
    return {
        type: LOGOUT_REQUEST,
    };
};

const receiveLogout = (): AppActions => {
    return {
        type: LOGOUT_SUCCESS,
    };
};

const logoutFailure = (error: Error): AppActions => {
    return {
        type: LOGOUT_FAILURE,
        error,
    };
};

const verifyRequest = (): AppActions => {
    return {
        type: VERIFY_REQUEST,
    };
};

const verifySuccess = (): AppActions => {
    return {
        type: VERIFY_SUCCESS,
    };
};

export const loginUser = (email: string, password: string) => (dispatch: Dispatch<AppActions>) => {
    dispatch(requestLogin());
    myFirebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch(receiveLogin(user));
        })
        .catch(error => {
            dispatch(loginFailure(error));
        });
};

export const logoutUser = () => (dispatch: Dispatch<AppActions>) => {
    dispatch(requestLogout());
    myFirebase
        .auth()
        .signOut()
        .then(() => {
            dispatch(receiveLogout());
        })
        .catch(error => {
            dispatch(logoutFailure(error));
        });
};

export const verifyAuth = () => (dispatch: Dispatch<AppActions>) => {
    dispatch(verifyRequest());
    myFirebase.auth().onAuthStateChanged(user => {
        if (user !== null) {
            dispatch(receiveLogin(user));
        }
        dispatch(verifySuccess());
    });
};
