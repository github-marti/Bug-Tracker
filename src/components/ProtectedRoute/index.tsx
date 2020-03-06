import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

interface ProtectedRouteProps {
    component: Component;
    isAuthenticated: boolean;
    isVerifying: boolean;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
    const { component, isAuthenticated, isVerifying, ...rest } = props;

    return (
        <Route
            {...rest}
            render={(props: any) =>
                isVerifying ? (
                    <div />
                ) : isAuthenticated ? (
                    <Component {...props} />
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
};

export default ProtectedRoute;
