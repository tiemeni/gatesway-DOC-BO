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
        loadingUserSuccess: true,
      };
    case types.GET_ALL_USERS_FAILED:
      return {
        ...state,
        loadingUsers: false,
      };
    case types.POST_USER_REQUEST:
      return {
        ...state,
        postingUser: true,
      };
    case types.POST_USER_REQUEST_SUCCESS:
      return {
        ...state,
        postingUser: false,
      };
    case types.POST_USER_REQUEST_FAILED:
      return {
        ...state,
        postingUser: false,
        errorPostingUser: action.payload,
      };
    case types.UPDATE_USER_REQUEST:
      return {
        ...state,
        updatingUser: true,
      };
    case types.UPDATE_USER_REQUEST_SUCCESS:
      return {
        ...state,
        updatingUser: false,
      };
    case types.UPDATE_USER_REQUEST_FAILED:
      return {
        ...state,
        updatingUser: false,
        errorUpdatingUser: action.payload,
      };
    case types.DELETE_USER_REQUEST:
      return {
        ...state,
        deletingUser: true,
      };
    case types.DELETE_USER_REQUEST_SUCCESS:
      return {
        ...state,
        deletingUser: false,
        deleteUserSuccess: true,
      };
    case types.DELETE_USER_REQUEST_FAILED:
      return {
        ...state,
        deletingUser: false,
        errorDeletingUser: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducers;
