import * as types from './types';

const initialState = {
  specialities: [],
};

const SpecialityReducers = (state = initialState, action = undefined) => {
  switch (action.type) {
    case types.GET_ALL_SPECIALITIES:
      return {
        ...state,
      };
    case types.GET_ALL_SPECIALITIES_SUCCESS:
      return {
        ...state,
        specialities: action.payload,
      };
    default:
      return state;
  }
};
export default SpecialityReducers;
