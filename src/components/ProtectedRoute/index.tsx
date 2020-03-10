import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { AppState } from '../../store/configureStore';

interface ProtectedRouteProps {
    component: Component;
}

type Props = LinkStateToProps & ProtectedRouteProps;

class ProtectedRoute extends Component<Props, {}> {
    render() {
        const { isAuthenticated, isVerifying, ...rest } = this.props;
        return (
            <Route
                {...rest}
                render={(props: any) =>
                    isVerifying ? (
                        <div />
                    ) : isAuthenticated ? (
                        <Component {...this.props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: props.location },
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
