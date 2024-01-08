import { all, put, call, takeLatest } from '@redux-saga/core/effects'
import { trucksSlice } from '../reducers/trucks';
import { trucks } from '../constants/trucks';
import { getAll } from '../services/trucksService';

function* onFetchTrucks() {
    try {
        const result = yield call(getAll)

        yield put(trucksSlice.actions.setTrucks(result))
    } catch (error) {
        console.log(error);
    }
}

export default function* trucksSaga() {
    yield all([
        takeLatest(trucksSlice.actions.fetchTrucks, onFetchTrucks),
    ])
}