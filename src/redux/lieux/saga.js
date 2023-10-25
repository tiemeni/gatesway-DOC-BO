import { put, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import { getUnauthRequest } from '../../utils/api';

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

export default function* LieuxSaga() {
  yield takeLatest(types.GET_ALL_LIEUX, getAllLieux);
}
