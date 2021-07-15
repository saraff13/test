import { combineReducers } from "redux";
import loginReducer from './loginReducer';
import loaderReducer from './loaderReducer';
import toastReducer from './toastReducer';
import newsReducer from './newsReducer';

export default combineReducers({
    loginReducer,
    loaderReducer,
    toastReducer,
    newsReducer,
});