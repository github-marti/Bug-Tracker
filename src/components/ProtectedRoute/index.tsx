import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { AppState } from '../../store/configureStore';

interface ProtectedRouteProps {
    component: React.ComponentClass;
}

type Props = LinkStateToProps & ProtectedRouteProps;

class ProtectedRoute extends Component<Props, {}> {
    render() {
        const { isAuthenticated, isVerifying, component: Component, ...rest } = this.props;
        return (
            <Route
                {...rest}
                render={() =>
                    isVerifying ? (
                        <div />
                    ) : isAuthenticated ? (
                        <Component />
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                            }}
                        />
                    )
                }
            />
        );
    }
}

interface LinkStateToProps {
    isAuthenticated: boolean;
    isVerifying: boolean;
}

const mapStateToProps = (state: AppState): LinkStateToProps => ({
    isAuthenticated: state.authorization.isAuthenticated,
    isVerifying: state.authorization.isVerifying,
});

export default connect(mapStateToProps)(ProtectedRoute);
