import * as types from './types';

const iniatialState = {
  isLoading: false,
  isFailed: false,
  success: false,
  copyId: null,
};

const AppointmentReducer = (state = iniatialState, action) => {
  switch (action.type) {
    case types.UPDATE_APPOINTMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        success: false,
        isFailed: false,
      };
    case types.UPDATE_APPOINTMENT_FAILED:
      return {
        ...state,
        isLoading: false,
        isFailed: true,
      };
    case types.UPDATE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isFailed: false,
        success: true,
      };
    case types.COPY_APPOINTMENT_ID:
      return {
        ...state,
        copyId: action.payload,
      };
    default:
      return state;
  }
};

export default AppointmentReducer;
