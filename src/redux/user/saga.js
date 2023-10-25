import { put, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import { getUnauthRequest, postUnauthRequest } from '../../utils/api';

const { REACT_APP_BASE_URL } = process.env;

/**
 * @description ici le saga reducer de l'evenement RESET_APP
 */

function* login({ payload }) {
  const data = {
    email: payload.email,
    password: payload.password,
  };
  try {
    const result = yield postUnauthRequest(
      `${REACT_APP_BASE_URL}/users/signin?idCentre=${payload?.idCentre}`,
      data,
    );
    if (result.success) {
      yield put({
        type: types.LOGIN_REQUEST_SUCCESS,
        payload: result.data?.user,
      });
      localStorage.setItem('idc', payload?.idCentre);
      window.location = '/content';
    } else {
      yield put({ type: types.LOGIN_REQUEST_FAILED, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.LOGIN_REQUEST_FAILED, payload: error.message });
  }
}

function* getAllUsers() {
  const idc = localStorage.getItem('idc');
  try {
    const result = yield getUnauthRequest(
      `${REACT_APP_BASE_URL}/users/?idCentre=${idc}`,
    );
    if (result.success) {
      yield put({ type: types.GET_ALL_USERS_SUCCESS, payload: result.data });
    } else {
      yield put({ type: types.GET_ALL_USERS_FAILED, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.GET_ALL_USERS_FAILED, payload: error.message });
  }
}

export default function* UserSaga() {
  yield takeLatest(types.LOGIN_REQUEST, login);
  yield takeLatest(types.GET_ALL_USERS, getAllUsers);
}
