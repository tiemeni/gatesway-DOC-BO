import * as types from './types';

/**
 * @description
 *
 */

const initialState = {
  userInfo: {},
  loginSuccess: false,
  loginErrorMessage: null,
  users: [],
};

const UserReducers = (state = initialState, action = undefined) => {
  switch (action.type) {
    case types.RESET_ALL_FIELD:
      return {
        ...state,
        loginLoading: false,
        loginSuccess: false,
        loginErrorMessage: null,
      };
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loginLoading: true,
        loginSuccess: false,
      };
    case types.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        userInfo: action.payload,
        loginSuccess: true,
      };
    case types.LOGIN_REQUEST_FAILED:
      return {
        ...state,
        loginLoading: false,
        loginErrorMessage: action.payload,
        loginSuccess: false,
      };
    case types.GET_ALL_USERS:
      return {
        ...state,
        loadingUsers: true,
      };
    case types.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        loadingUsers: false,
        users: action.payload,
      };
    case types.GET_ALL_USERS_FAILED:
      return {
        ...state,
        loadingUsers: false,
      };
    default:
      return state;
  }
};

export default UserReducers;
