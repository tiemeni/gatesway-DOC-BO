import * as types from './types';

/**
 * @description remarquer qu'on defini des valeurs initial aux deux parametres
 * aussi
 */

const initialState = {
  dateSelected: null,
  openModal: false,
};

const CommonReducer = (state = initialState, action = undefined) => {
  switch (action.type) {
    case types.RESET_APP:
      return {
        ...state,
        waveForLogin: 'App reset good , welcome login',
      };
    case types.AGENDA_DATE_CLICK:
      return {
        ...state,
        dateSelected: action.payload.date,
        openModal: action.payload.isOpen,
      };
    default:
      return state;
  }
};

export default CommonReducer;
