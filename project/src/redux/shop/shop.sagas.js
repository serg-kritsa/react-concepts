import { takeLatest } from 'redux-saga/effects';

import {
} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollections() {
  yield console.log(2);
}

export function* onFetchCollectionsStart() {
  yield console.log(1);
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections);
}
