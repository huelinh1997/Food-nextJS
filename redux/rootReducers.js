import { combineReducers } from 'redux';
import AuthenticationReducer from './reducer/authenticationReducer';
import GlobalReducer from './reducer/globalReducer';

export default combineReducers({
  AuthenticationReducer,
  GlobalReducer,
});
