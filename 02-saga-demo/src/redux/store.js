import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'; // 1)
import logger from 'redux-logger';

import rootReducer from './root-reducer';

import { incrementSaga } from './app.saga'; // 5)

const sagaMiddleware = createSagaMiddleware(); // 2)

const middlewares = [logger, sagaMiddleware]; // 3)

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(incrementSaga); // 6)

export default store;
