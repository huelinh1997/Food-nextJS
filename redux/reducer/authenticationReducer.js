import { authenticationActions } from '../constants/authenticationActions.js';

const initialState = {
  isLoading: false,
  isError: false,
  messageError: '',
  type: '',
  user: null,
  isLogout: false,
  loggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case authenticationActions.LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case authenticationActions.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.data,
        loggedIn: true,
        isLoading: false,
      };
    case authenticationActions.LOGIN_FAILED:
      return {
        ...state,
        messageError: action.error,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
