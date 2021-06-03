import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import AuthenticationSaga from './saga/authenticationSaga';

export const sagaMiddleware = createSagaMiddleware();

export default function* rootSaga() {
  yield all([AuthenticationSaga()]);
}
