import { call, put, takeEvery } from 'redux-saga/effects';
import {
  GET_USER_ID,
  GET_USER_ID_SUCCESS,
} from 'store/features/user';

function* fetchData() {
  const data = yield call(() =>
    fetch('https://httpbin.org/ip').then((response) =>
      response.json()
    )
  );
  yield put(GET_USER_ID_SUCCESS(data));
}

export function* ipSaga() {
  yield takeEvery(GET_USER_ID, fetchData);
}
