import {all, call, spawn} from '@redux-saga/core/effects';
import trucksSaga from './trucks';
import mapsSaga from './maps'

export default function* index() {
    const sagas = [trucksSaga, mapsSaga];

    yield all(
        sagas.map((saga) =>
          spawn(function* () {
            while (true) {
              try {
                yield call(saga)
                break
              } catch (err) {
                console.log("Error:" + err)
              }
            }
          })
        )
      )
}