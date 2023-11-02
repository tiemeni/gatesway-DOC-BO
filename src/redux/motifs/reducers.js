import * as types from './types';

/**
 * @description remarquer qu'on defini des valeurs initial aux deux parametres
 * aussi
 */

const initialState = {
  motifs: [],
};

const MotifReducers = (state = initialState, action = undefined) => {
  switch (action.type) {
    case types.GET_ALL_MOTIFS:
      return {
        ...state,
        loadingMotifs: true,
      };
    case types.GET_ALL_MOTIFS_SUCCESS:
      return {
        ...state,
        motifs: action.payload,
        loadingMotifs: false,
      };
    case types.GET_ALL_MOTIFS_FAILED:
      return {
        ...state,
        loadingMotifs: false,
      };
    case types.POST_MOTIF_REQUEST:
      return {
        ...state,
        postingMotif: true,
      };
    case types.POST_MOTIF_REQUEST_SUCCESS:
      return {
        ...state,
        postingMotif: false,
      };
    case types.POST_MOTIF_REQUEST_FAILED:
      return {
        ...state,
        postingMotif: false,
        errorPostingMotif: action.payload,
      };
    default:
      return state;
  }
};

export default MotifReducers;
