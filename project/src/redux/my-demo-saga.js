import { takeEvery } from 'redux-saga/effects';

import { UserActionTypes } from './user/user.types';

export function* mySagaCallback() {
  yield ' ::: 4) fired listener';
}

export default function* mySaga() {
  // ::: 2) added listener
  yield takeEvery(UserActionTypes.SET_CURRENT_USER, mySagaCallback);
}

// take
function* takeDemo() {
  const payload = yield take('ACTION');
}
// ============================================================
// takeEvery
function* takeEverySagaCallback() {
  yield console.log('THIS line will be printed EVERY time');
}
function* takeEveryDemo() {
  yield take('ACTION', takeEverySagaCallback);
}
// takeEvery workaround // used for debounce effect 
function* takeAsTakeEvery() {
  while (true) {
    yield take('ACTION', takeEverySagaCallback);
    console.log('THIS line will be printed EVERY time');
    yield delay(3000); // current call holds for specified time
  }
}
// ============================================================
// takeLatest
function* takeLatestSagaCallback() { // if fired MANY times
  yield console.log('THIS line will be printed EVERY time');
  yield delay(3000); // 
  yield put({type: 'NEW ACTION FROM SAGA'}); // dispatched ONCE //// prev will be canceled
}
function* takeLatestDemo() {
  yield takeLatest('ACTION', takeLatestSagaCallback);
}
