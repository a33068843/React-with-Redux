import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_DATA, FETCH_DATA_SUCCESS } from './effectsSlice';

function* fetchData() {
  const data = yield call(() =>
    fetch('https://httpbin.org/get').then((response) =>
      response.json()
    )
  );
  console.log('fetch!');
  yield put(FETCH_DATA_SUCCESS(data));
}

function* mySaga() {
  yield takeEvery(FETCH_DATA, fetchData);
}

export default mySaga;
