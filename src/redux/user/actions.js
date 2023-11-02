import { GET_ALL_USERS, LOGIN_REQUEST, POST_USER_REQUEST } from './types';

export const processLogin = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
});

export const getAllUser = (payload) => ({
  type: GET_ALL_USERS,
  payload,
});

export const postUser = (user) => ({
  type: POST_USER_REQUEST,
  user,
});
