import { put, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import { getUnauthRequest } from '../../utils/api';

const { REACT_APP_BASE_URL } = process.env;

const idc = localStorage.getItem('idc');

/**
 * @description ici le saga reducer de l'evenement RESET_APP
 */
function* getAllPraticiens() {
  try {
    const res = yield getUnauthRequest(
      `${REACT_APP_BASE_URL}/users/?isPraticien=true&idCentre=${idc}`,
    );
    if (!res.success)
      yield put({
        type: types.GET_ALL_PRATICIENS_FAILED,
        payload: {
          error: "Quelque chose s'est mal passé./nVeuillez réessayer plus tard",
        },
      });
    console.log(res.data);
    yield put({ type: types.GET_ALL_PRATICIENS_SUCCESS, payload: res });
  } catch (error) {
    yield put({
      type: types.GET_ALL_PRATICIENS_FAILED,
      payload: { error: error?.message },
    });
  }
}

export default function* PraticiensSaga() {
  yield takeLatest(types.GET_ALL_PRATICIENS_REQUEST, getAllPraticiens);
}
