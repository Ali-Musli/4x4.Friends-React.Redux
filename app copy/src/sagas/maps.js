import { all, put, call, takeLatest } from '@redux-saga/core/effects'
import { mapsSlice } from '../reducers/maps';
import { getAllMaps } from '../services/mapsServices';

function* onFetchAllMaps() {
    try {
        const result = yield call(getAllMaps);

        yield put(mapsSlice.actions.setAllMaps(result))
    } catch (error) {
        console.log(error);
    }
}


export default function* trucksSaga() {
    yield all([
        takeLatest(mapsSlice.actions.fetchAllMaps, onFetchAllMaps),
    ])
}