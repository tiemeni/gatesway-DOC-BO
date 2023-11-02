import { put, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import {
  getUnauthRequest,
  patchUnauthRequest,
  postUnauthRequest,
} from '../../utils/api';

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

function* postUser({ user }) {
  const idc = localStorage.getItem('idc');
  const payload = {
    civility: user?.civility,
    name: user.name,
    surname: user.surname,
    birthdate: user.birthdate,
    telephone: user.telephone,
    email: user.email,
    password: user?.password,
    initiales: user.initiales,
    active: user.active ? 1 : 2,
    groups: user?.groups,
    idCentre: idc,
  };
  try {
    const result = yield postUnauthRequest(
      `${process.env.REACT_APP_BASE_URL}/users/register/?idCentre=${idc}`,
      payload,
    );
    if (result.success) {
      yield put({
        type: types.POST_USER_REQUEST_SUCCESS,
      });
      yield put({ type: types.GET_ALL_USERS });
      window.history.back();
    } else {
      yield put({
        type: types.POST_USER_REQUEST_FAILED,
        payload: result.message,
      });
    }
  } catch (error) {
    yield put({
      type: types.POST_USER_REQUEST_FAILED,
      payload: error.message,
    });
  }
}

function* updateUser({ user }) {
  const idc = localStorage.getItem('idc');
  const payload = {
    civility: user?.civility,
    name: user.name,
    surname: user.surname,
    birthdate: user.birthdate,
    telephone: user.telephone,
    email: user.email,
    password: user?.password,
    initiales: user.initiales,
    active: user.active === '1',
    groups: user?.groups,
  };
  try {
    const result = yield patchUnauthRequest(
      `${process.env.REACT_APP_BASE_URL}/users/${user?._id}/?idCentre=${idc}`,
      payload,
    );
    if (result.success) {
      yield put({
        type: types.UPDATE_USER_REQUEST_SUCCESS,
      });
      yield put({ type: types.GET_ALL_USERS });
      window.history.back();
    } else {
      yield put({
        type: types.UPDATE_USER_REQUEST_FAILED,
        payload: result.message,
      });
    }
  } catch (error) {
    yield put({
      type: types.UPDATE_USER_REQUEST_FAILED,
      payload: error.message,
    });
  }
}

export default function* UserSaga() {
  yield takeLatest(types.LOGIN_REQUEST, login);
  yield takeLatest(types.GET_ALL_USERS, getAllUsers);
  yield takeLatest(types.POST_USER_REQUEST, postUser);
  yield takeLatest(types.UPDATE_USER_REQUEST, updateUser);
}
