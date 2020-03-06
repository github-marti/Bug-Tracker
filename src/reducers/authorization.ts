import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    VERIFY_REQUEST,
    VERIFY_SUCCESS,
    AuthActionTypes,
} from '../types/actions';
import { Authorization } from '../types/Authorization';

const authReducerDefaultState: Authorization = {
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    loginError: undefined,
    logoutError: undefined,
    isAuthenticated: false,
    user: {},
};

export default (state = authReducerDefaultState, action: AuthActionTypes) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoggingIn: true,
                loginError: '',
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: true,
                user: action.user,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: false,
                loginError: action.error,
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                isLoggingOut: true,
                logoutError: '',
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggingOut: false,
                isAuthenticated: false,
                user: {},
            };
        case LOGOUT_FAILURE:
            return {
                ...state,
                isLoggingOut: false,
                logoutError: action.error,
            };
        case VERIFY_REQUEST:
            return {
                ...state,
                isVerifying: true,
            };
        case VERIFY_SUCCESS:
            return {
                ...state,
                isVerifying: false,
            };
        default:
            return state;
    }
};
