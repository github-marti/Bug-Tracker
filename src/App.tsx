import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import Login from './components/Login';

interface Props {
    isAuthenticated: boolean;
    isVerifying: boolean;
}

function App({ isAuthenticated, isVerifying }: Props) {
    return (
        <Switch>
            <ProtectedRoute path="/" component={Home} isAuthenticated={isAuthenticated} isVerifying={isVerifying} />
            <Route path="/login" component={Login} />
        </Switch>
    );
}

function mapStateToProps(state: any) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isVerifying: state.auth.isVerifying,
    };
}

export default connect(mapStateToProps)(App);
