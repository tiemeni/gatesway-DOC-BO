import * as types from './types';

const iniatialState = {
  isLoading: false,
  isFailed: false,
  success: false,
  copyId: null,
  deleting: false,
  isDeleted: false,
  duration: null,
  pasteProcessing: false,
  pasteSuccess: false,
  pasteFailed: false,
  openReport: false,
  reportId: null,
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
        success: false,
      };
    case types.UPDATE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isFailed: false,
        success: true,
      };
    case types.DELETE_APPOINTMENT_REQUEST:
      return {
        ...state,
        deleting: true,
        isDeleted: false,
        isFailed: false,
      };
    case types.DELETE_APPOINTMENT_FAILED:
      return {
        ...state,
        deleting: false,
        isDeleted: false,
        isFailed: true,
      };
    case types.DELETE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        deleting: false,
        isDeleted: true,
        isFailed: false,
      };
    case types.COPY_APPOINTMENT_ID:
      return {
        ...state,
        copyId: action.payload.id,
        duration: action.payload.duration,
      };
    case types.DUPLICATE_APPOINTMENT_REQUEST:
      return {
        ...state,
        pasteProcessing: true,
        pasteSuccess: false,
        pasteFailed: false,
      };
    case types.DUPLICATE_APPOINTMENT_FAILED:
      return {
        ...state,
        pasteProcessing: false,
        pasteFailed: true,
        pasteSuccess: false,
      };
    case types.DUPLICATE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        pasteProcessing: false,
        pasteFailed: false,
        pasteSuccess: true,
      };
    case types.OPEN_REPORT_MODAL:
      return {
        ...state,
        openReport: action.payload.isOpen,
        reportId: action.payload.id,
      };
    default:
      return state;
  }
};

export default AppointmentReducer;
