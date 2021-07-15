import {fork, all} from 'redux-saga/effects';
import loginSaga from './loginSaga';
import newsSaga from './newsSaga';

export default function* rootSaga() {
  yield all([fork(loginSaga)]);
  yield all([fork(newsSaga)]);
}