import * as types from './types';

/**
 * @description
 *
 */

const initialState = {};

const UserReducers = (state = initialState, action = undefined) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loginLoading: true,
      };
    case types.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loginLoading: false,
      };
    case types.LOGIN_REQUEST_FAILED:
      return {
        ...state,
        loginLoading: false,
        loginErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducers;
