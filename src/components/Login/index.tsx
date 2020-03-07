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

    handleSubmit = () => {
        const { dispatch } = this.props;
        const { email, password } = this.state;

        dispatch(loginUser(email, password));
    };
}

function mapStateToProps(state: State) {
    return {
        isLoggingIn: state.auth.isLoggingIn,
        loginFailure: state.auth.loginError,
        isAuthenticated: state.auth.isAuthenticated,
    };
}

export default connect(mapStateToProps)(Login);
