import { combineReducers } from 'redux';
import authorizationReducer from '../reducers/authorization';

export default combineReducers({ authorization: authorizationReducer });
