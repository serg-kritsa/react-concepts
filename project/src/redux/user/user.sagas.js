import { takeLatest, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

export function* isUserAuthenticated() {
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
  ]);
}
