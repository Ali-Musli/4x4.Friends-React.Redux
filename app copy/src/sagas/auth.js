import { all, put, call, takeLatest } from '@redux-saga/core/effects'
import { authSlice } from '../reducers/auth';
import { login, logout, register } from '../services/authService';

function* onFetchRegister(action) {
    try {
        const result = yield call(register, action.payload);

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

function* onFetchLogin(action) {
    try {
        const result = yield call(login, action.payload);

        console.log(result);
        yield put(authSlice.actions.setUser(result));
    } catch (error) {
        console.log(error);
    }
}

function* onLogout() {
    try {
        const res = yield call(logout);

        if(res){
            yield put(authSlice.actions.setUser({}));
            console.log(res);
        }
    } catch (error) {
        console.log(error);
    }
}

export default function* trucksSaga() {
    yield all([
        takeLatest(authSlice.actions.fetchLogin, onFetchLogin),
        takeLatest(authSlice.actions.removeUser, onLogout),
    ]);
}