import * as types from '../actionTypes';

export const getFeed = request => ({
    type: types.GET_FEED_START,
    payload: request,
});
