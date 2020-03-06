import { myFirebase } from '../firebase/firebase';
import { User } from '../types/User';
import { AppActions } from '../types/actions';

const requestLogin = () => {
    return {
        type: 'LOGIN_REQUEST',
    };
};

const receiveLogin = (user: User): AppActions => {
    return {
        type: 'LOGIN_SUCCESS',
        user,
    };
};

const loginFailure = (error: Error): AppActions => {
    return {
        type: 'LOGIN_FAILURE',
        error,
    };
};

const requestLogout = () => {
    return {
        type: 'LOGOUT_REQUEST',
    };
};

const receiveLogout = () => {
    return {
        type: 'LOGOUT_SUCCESS',
    };
};

const logoutFailure = (error: Error): AppActions => {
    return {
        type: 'LOGOUT_FAILURE',
        error,
    };
};

const verifyRequest = () => {
    return {
        type: 'VERIFY_REQUEST',
    };
};

const verifySuccess = () => {
    return {
        type: 'VERIFY_SUCCESS',
    };
};

export const loginUser = (email, password) => dispatch => {
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

export const logoutUser = () => dispatch => {
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

export const verifyAuth = () => dispatch => {
    dispatch(verifyRequest());
    myFirebase.auth().onAuthStateChanged(user => {
        if (user !== null) {
            dispatch(receiveLogin(user));
        }
        dispatch(verifySuccess());
    });
};
