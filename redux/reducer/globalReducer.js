import { globalState } from '../constants/globalAction';

const initialState = {
  alertState: false,
  alert: {
    state: false,
    message: undefined,
    type: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case globalState.SHOW_ALERT:
      return {
        ...state,
        alertState: true,
        alert: { ...state.alert, ...action.data },
      };
    case globalState.RESET_ALERT:
      return {
        ...state,
        alert: { ...state.alert, ...{ state: false, message: undefined } },
      };

    default:
      return state;
  }
};

export default reducer;
