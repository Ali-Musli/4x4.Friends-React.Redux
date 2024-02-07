import { all, put, call, takeLatest } from '@redux-saga/core/effects'
import { mapsSlice } from '../reducers/maps';
import { addCommentOnCurrentMap, getAllMaps, getMapById } from '../services/mapsServices';

function* onFetchAllMaps() {
    try {
        const result = yield call(getAllMaps);

        yield put(mapsSlice.actions.setAllMaps(result))
    } catch (error) {
        console.log(error);
    }
}

function* onFetchMapById(action) {
    try {
        const result = yield call(getMapById, action.payload);

        yield put(mapsSlice.actions.setMapById(result));
    } catch (error) {
        console.log(error);
    }
}

function* onAddCommentOnCurrentMap(action) {
    try {
        const result = yield call(addCommentOnCurrentMap, action.payload);

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

export default function* trucksSaga() {
    yield all([
        takeLatest(mapsSlice.actions.fetchAllMaps, onFetchAllMaps),
        takeLatest(mapsSlice.actions.fetchMapById, onFetchMapById),
        takeLatest(mapsSlice.actions.addCommentOnCurrentMap, onAddCommentOnCurrentMap),
    ])
}