import { put, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import { getUnauthRequest } from '../../utils/api';

const BASE_URL =
  process.env.BASE_URL || 'https://marque-blanche-bo-backnd.vercel.app';

const idc = localStorage.getItem('idc') || '649aacd0c7542f87284daefd';

/**
 * @description ici le saga reducer de l'evenement RESET_APP
 */
function* getAllPraticiens() {
  try {
    const res = yield getUnauthRequest(
      `${BASE_URL}/users/profession/?isPraticien=true&idCentre=${idc}`,
    );
    if (!res.success)
      yield put({
        type: types.GET_ALL_PRATICIENS_FAILED,
        payload: {
          error: "Quelque chose s'est mal passé./nVeuillez réessayer plus tard",
        },
      });
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
