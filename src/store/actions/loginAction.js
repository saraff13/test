import * as types from '../actionTypes';

export const initLogin = request => ({
    type: types.LOGIN_START,
    payload: request,
});

export const setUserData = request => ({
    type: types.SET_USER_DATA,
    payload: request,
})