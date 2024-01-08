import { all, put, takeLatest } from '@redux-saga/core/effects'
import { trucksSlice } from '../reducers/trucks';
import { trucks } from '../constants/trucks'

function* onFetchTrucks() {
    try{
        yield put(trucksSlice.actions.setTrucks(trucks))
    } catch(error) {
        console.log(error);
    }
}

export default function* trucksSaga() {
    yield all([
        takeLatest(trucksSlice.actions.fetchTrucks, onFetchTrucks),
    ])
}