import { applyMiddleware, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { verifyAuth } from '../actions';
import rootReducer from '../reducers';
import { AppActions } from '../types/actions';

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>));
    store.dispatch(verifyAuth());
    return store;
}
