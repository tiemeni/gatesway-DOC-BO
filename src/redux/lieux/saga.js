import { put, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import { getUnauthRequest, postUnauthRequest } from '../../utils/api';
import {
  convertNumberToRegion,
  convertNumberToVille,
} from '../../utils/helpers';

/**
 * @description ici le saga reducer
 */

function* getAllLieux() {
  const idc = localStorage.getItem('idc');
  try {
    const result = yield getUnauthRequest(
      `${process.env.REACT_APP_BASE_URL}/lieu/?idCentre=${idc}`,
    );
    if (result.success) {
      yield put({ type: types.GET_ALL_LIEUX_SUCCESS, payload: result.data });
    }
  } catch (error) {
    console.log(error.message);
  }
}

function* postLieu({ lieu }) {
  const payload = {
    active: lieu?.active === '1',
    codePostal: lieu?.codePostal,
    location: JSON.stringify({
      longitude: lieu.longitude,
      latitude: lieu.latitude,
    }),
    initiales: lieu?.initiales,
    label: lieu?.label,
    reference: lieu?.reference,
    region: convertNumberToRegion(lieu?.region),
    ville: convertNumberToVille(lieu?.ville),
  };
  const idc = localStorage.getItem('idc');
  try {
    const result = yield postUnauthRequest(
      `${process.env.REACT_APP_BASE_URL}/lieu/register/?idCentre=${idc}`,
      payload,
    );
    if (result.success) {
      yield put({ type: types.POST_LIEU_REQUEST_SUCCESS });
      yield put({ type: types.GET_ALL_LIEUX });
      window.history.back();
    }
  } catch (error) {
    console.log(error.message);
    yield put({ type: types.POST_LIEU_REQUEST_FAILED, payload: error.message });
  }
}

export default function* LieuxSaga() {
  yield takeLatest(types.GET_ALL_LIEUX, getAllLieux);
  yield takeLatest(types.POST_LIEU_REQUEST, postLieu);
}
