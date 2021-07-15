import * as types from '../actionTypes';

export const showToast = payload => ({
    type: types.SHOW_TOAST,
    payload,
});

export const hideToast = () => ({
    type: types.HIDE_TOAST,
});