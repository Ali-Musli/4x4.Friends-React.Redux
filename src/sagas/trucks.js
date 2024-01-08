import { all, put, call, takeLatest } from '@redux-saga/core/effects'
import { trucksSlice } from '../reducers/trucks';
import { trucks } from '../constants/trucks';
import { getAll, getTruckById } from '../services/trucksService';

function* onFetchTrucks() {
    try {
        const result = yield call(getAll)

        yield put(trucksSlice.actions.setTrucks(result))
    } catch (error) {
        console.log(error);
    }
}

function* onFetchTruckById(action) {
    try {
        let result = yield call(getTruckById, action.payload);

        yield put(trucksSlice.actions.setTruckById(result))
    } catch (error) {
        console.log(error);
    }
}

export default function* trucksSaga() {
    yield all([
        takeLatest(trucksSlice.actions.fetchTrucks, onFetchTrucks),
        takeLatest(trucksSlice.actions.fetchTruckById, onFetchTruckById),
    ])
}