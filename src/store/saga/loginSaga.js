import * as types from '../actionTypes';
import { takeLatest, put } from 'redux-saga/effects';
import API from '../../utils/api';
import * as TOAST_TYPE from '../../utils/toastTypes';

export default function* loginSaga(){
    yield takeLatest(types.LOGIN_START, login);
}

function* login(action){
    yield put({
        type: types.LOADER_START,
    });
    try{
        const api = new API()
        const response = yield api.call({
            type: 'post',
            params: action.payload,
            apiEndPoint: 'login',
        });

        console.log('Saga result => ', response);

        yield put({
            type: types.LOGIN_SUCCESS,
            payload: response.data,
        });

        yield put({
            type: types.SHOW_TOAST,
            payload: {
                message: 'Successfully Signed in',
                type: TOAST_TYPE.SUCCESS,
            }
        });

        yield put({
            type: types.LOADER_STOP,
        });

    }catch(error){
        console.log('Saga error => ', error);

        yield put({
            type: types.SHOW_TOAST,
            payload: {
                message: error.message,
                type: TOAST_TYPE.ERROR,
            }
        });

        yield put({
            type: types.LOGIN_FAIL,
            payload: error,
        });

        yield put({
            type: types.LOADER_STOP,
        });
    }
}