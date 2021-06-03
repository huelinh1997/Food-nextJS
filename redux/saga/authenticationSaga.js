import { takeEvery, all } from 'redux-saga/effects';
import { authenticationActions } from '../constants/authenticationActions.js';
// import Api from '../../config/api';

function* loginUser() {
  // const loginApi = Api.post();
}

function* authenticationSaga() {
  yield all([takeEvery(authenticationActions.LOGIN, loginUser)]);
}

export default authenticationSaga;
