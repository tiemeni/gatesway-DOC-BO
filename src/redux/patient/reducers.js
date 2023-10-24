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
    default:
      return state;
  }
};

export default PatientReducers;
