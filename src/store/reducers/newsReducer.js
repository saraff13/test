import * as types from '../actionTypes';

const INITIAL_STATE = {
  loading: false,
  data: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_FEED_START:
      return {
        ...state,
        //...INITIAL_STATE, // because of this data is set to null initially
        loading: false,
      };
    case types.GET_FEED_SUCCESS:
      const updatedData = action.payload.newData;
      updatedData.data = [...action.payload.oldData, ...updatedData.data];
      return {
        ...state,
        ...INITIAL_STATE,
        loading: false,
        data: updatedData,
      };
    case types.GET_FEED_FAIL:
      return {
        ...state,
        ...INITIAL_STATE,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
