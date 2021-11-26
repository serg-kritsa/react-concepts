import { all, call, takeLatest } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';

export function* clearCartOnSignOut() {
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
