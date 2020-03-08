import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { logoutUser } from '../../actions/';
import { AppState } from '../../store/configureStore';
import { AppActions } from '../../types/actions';
import { bindActionCreators } from 'redux';

type Props = LinkStateProps;

interface LinkStateProps {
    isLoggingOut: boolean;
    logoutFailure: Error | undefined;
}

interface LinkDispatchProps {
    logoutUser: () => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
    isLoggingOut: state.authorization.isLoggingOut,
    logoutFailure: state.authorization.logoutError,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
    logoutUser: bindActionCreators(logoutUser, dispatch),
});
