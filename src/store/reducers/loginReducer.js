import * as types from '../actionTypes';
import AsyncStorage from '@react-native-community/async-storage';

const INITIAL_STATE = {
    loading: false,
    user: null,
    error: null,
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){

        case types.LOGIN_START:
            return {
                ...state,
                ...INITIAL_STATE,
                loading: true,
            };

        case types.LOGIN_SUCCESS:
            AsyncStorage.setItem('userData',JSON.stringify(action.payload));
            return {
                ...state,
                ...INITIAL_STATE,
                user: action.payload,
            };

        case types.LOGIN_FAIL:
            return {
                ...state,
                ...INITIAL_STATE,
                error: action.payload,
            };

        case types.LOGOUT:
            AsyncStorage.removeItem('userData');
            return {
                ...state,
                ...INITIAL_STATE,
            };

        case types.SET_USER_DATA:
            return {
                ...state,
                ...INITIAL_STATE,
                user: action.payload,
            }; 

        default:
            return state;
    }
};