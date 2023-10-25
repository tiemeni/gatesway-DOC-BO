import * as types from './types';

const initialState = {
  datas: [],
  praticiens: [],
  success: false,
  loading: false,
  message: '',
};

const PraticiensReducer = (state = initialState, action = undefined) => {
  switch (action.type) {
    case types.GET_PRATICIENS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PRATICIENS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        datas: action.payload.data,
      };
    case types.GET_PRATICIENS_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        message: action.payload.error,
      };
    case types.GET_ALL_PRATICIENS_REQUEST:
      return {
        ...state,
        allPratloading: true,
      };
    case types.GET_ALL_PRATICIENS_SUCCESS:
      return {
        ...state,
        allPratloading: false,
        allPratsuccess: true,
        praticiens: action.payload.data,
      };
    case types.GET_ALL_PRATICIENS_FAILED:
      return {
        ...state,
        allPratloading: false,
        allPratsuccess: false,
        message: action.payload.error,
      };
    default:
      return state;
  }
};
export default PraticiensReducer;
