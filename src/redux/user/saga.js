import { put, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import { postUnauthRequest } from '../../utils/api';

/**
 * @description ici le saga reducer de l'evenement RESET_APP
 */

function* login({ payload }) {
  console.log(payload);
  const data = {
    email: payload.email,
    password: payload.password,
  };
  try {
    const result = yield postUnauthRequest(
      `http://localhost:3500/users/signin?idCentre=
          ${payload?.idCentre}`,
      data,
    );
    yield console.log(result);
    if (result.success) {
      yield put({ type: types.LOGIN_REQUEST_SUCCESS, payload: result.data });
    } else {
      yield put({ type: types.LOGIN_REQUEST_FAILED, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.LOGIN_REQUEST_FAILED, payload: error.message });
  }
}

export default function* UserSaga() {
  yield takeLatest(types.LOGIN_REQUEST, login);
}
