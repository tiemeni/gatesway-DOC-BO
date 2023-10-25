import { put, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import { getUnauthRequest } from '../../utils/api';

/**
 * @description ici le saga reducer
 */

function* getAllMotifs() {
  //   const idc = localStorage.getItem('idc');
  try {
    const result = yield getUnauthRequest(
      `${process.env.REACT_APP_BASE_URL}/motif/`,
    );
    if (result.success) {
      yield put({ type: types.GET_ALL_MOTIFS_SUCCESS, payload: result.data });
    } else {
      yield put({ type: types.GET_ALL_MOTIFS_FAILED, payload: result.message });
    }
  } catch (error) {
    yield put({ type: types.GET_ALL_MOTIFS_FAILED, payload: error.message });
  }
}

export default function* MotifSaga() {
  yield takeLatest(types.GET_ALL_MOTIFS, getAllMotifs);
}
