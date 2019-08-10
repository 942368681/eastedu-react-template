import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import ListReducer from './ListReducer';

export default combineReducers({
    HomeReducer,
    ListReducer
});