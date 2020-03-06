import { combineReducers } from 'redux';
import auth from './auth';

export interface State {
    auth: {
        isLoggingIn: boolean;
        isLoggingOut: boolean;
        isVerifying: boolean;
        loginError: Error;
        logoutError: Error;
        isAuthenticated: boolean;
        user: object;
    };
}

export default combineReducers({ auth });
