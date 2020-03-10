import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import Login from './components/Login';
import { AppState } from './store/configureStore';

type Props = LinkStateToProps;

function App({ isAuthenticated, isVerifying }: Props) {
    return (
        <Switch>
            <ProtectedRoute
                exact
                path="/"
                component={Home}
                isAuthenticated={isAuthenticated}
                isVerifying={isVerifying}
            />
            <Route path="/login" component={Login} />
        </Switch>
    );
}

interface LinkStateToProps {
    isAuthenticated: boolean;
    isVerifying: boolean;
}

function mapStateToProps(state: AppState): LinkStateToProps {
    return {
        isAuthenticated: state.authorization.isAuthenticated,
        isVerifying: state.authorization.isVerifying,
    };
}

export default connect(mapStateToProps)(App);
