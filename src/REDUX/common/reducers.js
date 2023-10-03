import * as types from "./types";

const initialState = {};

const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RESET_APP:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default CommonReducer;
