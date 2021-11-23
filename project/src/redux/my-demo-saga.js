import { takeEvery } from 'redux-saga/effects';

import { UserActionTypes } from './user/user.types';

export function* mySagaCallback() {
  yield ' ::: 4) fired listener';
}

export default function* mySaga() {
  // ::: 2) added listener
  yield takeEvery(UserActionTypes.SET_CURRENT_USER, mySagaCallback);
}