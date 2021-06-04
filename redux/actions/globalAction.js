import { globalState } from '../constants/globalAction';

export function setShowAlert(data) {
  return {
    type: globalState.SHOW_ALERT,
    data,
  };
}

export function resetShowAlert() {
  return {
    type: globalState.RESET_ALERT,
  };
}
