import * as types from './types';

const initialState = {
  specialities: [],
};

const SpecialityReducers = (state = initialState, action = undefined) => {
  switch (action.type) {
    case types.GET_ALL_SPECIALITIES:
      return {
        ...state,
        gettingAllSpecs: true,
      };
    case types.GET_ALL_SPECIALITIES_SUCCESS:
      return {
        ...state,
        specialities: action.payload,
        gettingAllSpecs: false,
      };
    case types.POST_SPEC_REQUEST:
      return {
        ...state,
        loadingSpecialities: true,
      };
    case types.POST_SPEC_REQUEST_SUCCESS:
      return {
        ...state,
        loadingSpecialities: false,
      };
    case types.POST_SPEC_REQUEST_FAILED:
      return {
        ...state,
        loadingSpecialities: false,
        loadingSpecsError: action.payload,
      };
    case types.UPDATE_SPECIALITY_REQUEST:
      return {
        ...state,
        updatingSpecialities: true,
      };
    case types.UPDATE_SPECIALITY_REQUEST_SUCCESS:
      return {
        ...state,
        updatingSpecialities: false,
      };
    case types.UPDATE_SPECIALITY_REQUEST_FAILED:
      return {
        ...state,
        updatingSpecialities: false,
        updatingSpecsError: action.payload,
      };
    default:
      return state;
  }
};
export default SpecialityReducers;
