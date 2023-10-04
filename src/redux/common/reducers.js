import * as types from './types';

/**
 * @description remarquer qu'on defini des valeurs initial aux deux parametres
 * aussi
 */

const initialState = {};

const CommonReducer = (state = initialState, action = undefined) => {
  switch (action.type) {
    case types.RESET_APP:
      return {
        ...state,
        waveForLogin: 'App reset good , welcome login',
      };
    default:
      return state;
  }
};

export default CommonReducer;
