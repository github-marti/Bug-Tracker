import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../actions';
import { withStyles } from '@material-ui/styles';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { AppState } from '../../store/configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../types/actions';
import { bindActionCreators } from 'redux';

const styles = () => ({
    '@global': {
        body: {
            backgroundColor: '#fff',
        },
    },
    paper: {
        marginTop: 100,
        display: 'flex',
        padding: 20,
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#f50057',
    },
    form: {
        marginTop: 1,
    },
    errorText: {
        color: '#f50057',
        marginBottom: 5,
        textAlign: 'center',
    },
});

interface LoginState {
    email: string;
    password: string;
}

class Login extends Component<{}, LoginState> {
    state = { email: '', password: '' };

    handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ email: e.target.value });
    };

    handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ password: e.target.value });
    };
}

interface LinkStateProps {
    isLoggingIn: boolean;
    loginFailure: Error | undefined;
    isAuthenticated: boolean;
}

interface LinkDispatchProps {
    handleSubmit: (email: string, password: string) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => {
    return {
        isLoggingIn: state.authorization.isLoggingIn,
        loginFailure: state.authorization.loginError,
        isAuthenticated: state.authorization.isAuthenticated,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => {
    return {
        handleSubmit: bindActionCreators(loginUser, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
