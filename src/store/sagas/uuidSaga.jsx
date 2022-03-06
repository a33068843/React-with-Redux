import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_UUID, GET_UUID_SUCCESS } from 'store/features/user';

function* fetchData() {
  const data = yield call(() =>
    fetch('https://httpbin.org/uuid').then((response) =>
      response.json()
    )
  );
  console.log('fetch!');
  yield put(GET_UUID_SUCCESS(data));
}

export function* uuidSaga() {
  yield takeLatest(GET_UUID, fetchData);
}
