import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { logoutUser } from '../../actions/';
import { AppState } from '../../store/configureStore';
import { AppActions } from '../../types/actions';
import { bindActionCreators } from 'redux';

type Props = LinkStateProps & LinkDispatchProps;

export class Home extends Component<Props, {}> {
    handleLogout = () => {
        this.props.logoutUser();
    };

    render() {
        const { isLoggingOut, logoutError, isAuthenticated } = this.props;

        return (
            <div>
                <h1>This is your app's protected area.</h1>
                {isAuthenticated ? <p>Yes</p> : <p>No</p>}
                <p>Any routes here will also be protected.</p>
                {isLoggingOut && <p>Logging Out.....</p>}
                {logoutError && <p>{logoutError.toString()}</p>}
            </div>
        );
    }
}

interface LinkStateProps {
    isAuthenticated: boolean;
    isLoggingOut: boolean;
    logoutError: Error | undefined;
}

interface LinkDispatchProps {
    logoutUser: () => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
    isAuthenticated: state.authorization.isAuthenticated,
    isLoggingOut: state.authorization.isLoggingOut,
    logoutError: state.authorization.logoutError,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
    logoutUser: bindActionCreators(logoutUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
