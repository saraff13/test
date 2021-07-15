import * as types from '../actionTypes';
import * as TOAST_TYPE from '../../utils/toastTypes';

const INITIAL_STATE = {
  showing: false,
  message: 'Hi',
  type: TOAST_TYPE.NORMAL,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SHOW_TOAST:
      return {
        ...state,
        showing: true,
        message: action.payload.message,
        type: action.payload.type,
      };
    case types.HIDE_TOAST:
      return {
        ...state,
        ...INITIAL_STATE,
        // showing: false,
      };
    default:
      return state;
  }
};
