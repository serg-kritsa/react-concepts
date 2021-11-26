import { takeLatest, delay, put } from 'redux-saga/effects';

export function* onIncrement() { // 10)
  yield console.log('I am incremented');
  yield delay(3000);
  yield put({ type: 'INCREMENT_FROM_SAGA' }); // 11)
}

export function* incrementSaga() { // 7)
  yield takeLatest('INCREMENT', onIncrement); // 9)
}
