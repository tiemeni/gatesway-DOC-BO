import { LOGIN_REQUEST } from './types';

const processLogin = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
});

export default processLogin;
