import { all } from 'redux-saga/effects';
import { ipSaga } from './ipSaga';
import { uuidSaga } from './uuidSaga';

export function* rootSaga() {
  yield all([ipSaga(), uuidSaga()]);
}
