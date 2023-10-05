import * as types from './types';

const initialState = {
  datas: [],
  success: false,
  loading: false,
  message: '',
};

const PraticiensReducer = (state = initialState, action = undefined) => {
  switch (action.type) {
    case types.GET_ALL_PRATICIENS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ALL_PRATICIENS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        datas: action.payload.data,
      };
    case types.GET_ALL_PRATICIENS_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        message: action.payload.error,
      };
    default:
      return state;
  }
};
export default PraticiensReducer;
