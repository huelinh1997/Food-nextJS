import { authenticationActions } from '../constants/authenticationActions.js';

export const loginAction = params => ({
  type: authenticationActions.LOGIN,
  params,
});

export const loginSuccess = data => ({
  type: authenticationActions.LOGIN_SUCCESS,
  data,
});

export const loginFailed = error => ({
  type: authenticationActions.LOGIN_FAILED,
  error,
});

export const cleanUpData = () => ({
  type: authenticationActions.RESET_STATE,
});
