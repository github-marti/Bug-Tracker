import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../actions';
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

interface LoginProps {
    email: string
    password: string
}

class Login extends Component<LoginProps, {}> {
    state = { email: "", password: "" };

    handleEmailChange = ({ target }) => {
        this.setState({ email: target.value })
    }

function mapStateToProps(state: any) {
    return {
        isLoggingIn: state.auth.isLoggingIn,
        loginFailure: state.auth.loginFailure,
        isAuthenticated: state.auth.isAuthenticated,
    };
};

export default connect(mapStateToProps)(Login);
