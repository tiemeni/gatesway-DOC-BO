import * as types from './types';

/**
 * @description remarquer qu'on defini des valeurs initial aux deux parametres
 * aussi
 */

const initialState = {
  patients: [],
};

const PatientReducers = (state = initialState, action = undefined) => {
  switch (action.type) {
    case types.GET_ALL_PATIENT:
      return {
        ...state,
        loadingPatients: true,
      };
    case types.GET_ALL_PATIENT_SUCCESS:
      return {
        ...state,
        patients: action.payload,
        loadingPatients: false,
      };
    case types.GET_ALL_PATIENT_FAILED:
      return {
        ...state,
        loadingPatients: false,
      };
    case types.POST_PATIENT_REQUEST:
      return {
        ...state,
        postingPatient: true,
      };
    case types.POST_PATIENT_REQUEST_SUCCESS:
      return {
        ...state,
        postingPatient: false,
      };
    case types.POST_PATIENT_REQUEST_FAILED:
      return {
        ...state,
        postingPatient: false,
        errorPostingPatient: action.payload,
      };
    default:
      return state;
  }
};

export default PatientReducers;
