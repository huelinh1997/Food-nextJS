import { takeEvery, all, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import Api from '../../config/api';
import { authenticationActions } from '../constants/authenticationActions.js';
import { loginSuccess, loginFailed } from '../actions/authenticationAction';
// import Api from '../../config/api';

function* loginUser({ params }) {
  const getListUser = Api.get('listUser');
  try {
    const response = yield call(() => getListUser);
    const listUser = response.data;
    const user = listUser.find(
      item => item.email === params.email && item.password === params.password,
    );
    if (user) {
      yield put(loginSuccess(user));
      toast.success('Login successfully');
    } else {
      yield put(loginFailed());
    }
  } catch (error) {
    yield put(loginFailed(error.response));
  }
}

function* authenticationSaga() {
  yield all([takeEvery(authenticationActions.LOGIN, loginUser)]);
}

export default authenticationSaga;
