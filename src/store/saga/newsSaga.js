import * as types from '../actionTypes';
import {takeLatest, put} from 'redux-saga/effects';
import API from '../../utils/api';

export default function* newsSaga() {
  yield takeLatest(types.GET_FEED_START, news);
}

function* news(action) {
  if (action.payload.pageNo === 1) {
    yield put({
      type: types.LOADER_START,
    });
  }
  try {
    const api = new API();
    const response = yield api.call({
      apiEndPoint: `users?page=${action.payload.pageNo}`,
    });

    yield put({
      type: types.GET_FEED_SUCCESS,
      payload: {
        oldData: action.payload.data,
        newData: response.data,
      },
    });
    yield put({
      type: types.LOADER_STOP,
    });
  } catch (error) {
    yield put({
      type: types.GET_FEED_FAIL,
      payload: error,
    });
    yield put({
      type: types.LOADER_STOP,
    });
  }
}
