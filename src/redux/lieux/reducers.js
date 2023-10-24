import * as types from './types';

/**
 * @description remarquer qu'on defini des valeurs initial aux deux parametres
 * aussi
 */

const initialState = {
  lieux: [],
};

const LieuxReducers = (state = initialState, action = undefined) => {
  switch (action.type) {
    case types.GET_ALL_LIEUX:
      return {
        ...state,
      };
    case types.GET_ALL_LIEUX_SUCCESS:
      return {
        ...state,
        lieux: action.payload,
      };
    default:
      return state;
  }
};

export default LieuxReducers;
