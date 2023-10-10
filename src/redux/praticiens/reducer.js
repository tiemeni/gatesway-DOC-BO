import * as types from './types';

const initialState = {
  datas: [],
  success: false,
  loading: false,
  message: '',
  practitionersCheckedList: { idsList: [], namesList: [] },
};

const PraticiensReducer = (state = initialState, action = undefined) => {
  switch (action.type) {
    case types.GET_ALL_PRATICIENS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ALL_PRATICIENS_SUCCESS: {
      const { res, selectedValues } = action.payload;
      return {
        ...state,
        loading: false,
        success: true,
        datas: res.data,
        practitionersCheckedList: { ...selectedValues },
      };
    }
    case types.GET_ALL_PRATICIENS_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        message: action.payload.error,
      };
    case types.SAVE_CHECKED_PRACTITIONERS:
      return {
        ...state,
        practitionersCheckedList: { ...action.payload },
      };
    default:
      return state;
  }
};
export default PraticiensReducer;
