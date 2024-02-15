import { all, put, call, takeLatest } from '@redux-saga/core/effects'
import { authSlice } from '../reducers/auth';
import { login } from '../services/authService';

function* onFetchLogin(action) {
    try {
        const result = yield call(login, action.payload);

        console.log(result);
        yield put(authSlice.actions.setUser(result));
    } catch (error) {
        console.log(error);
    }
}

export default function* trucksSaga() {
    yield all([
        takeLatest(authSlice.actions.fetchLogin, onFetchLogin),
    ]);
}