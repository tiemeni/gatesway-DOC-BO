import { put, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import { getUnauthRequest } from '../../utils/api';

/**
 * @description ici le saga reducer
 */

function* getAllPatients() {
  const idc = localStorage.getItem('idc');
  try {
    const result = yield getUnauthRequest(
      `${process.env.REACT_APP_BASE_URL}/patients/?idCentre=${idc}`,
    );
    if (result.success) {
      yield put({ type: types.GET_ALL_PATIENT_SUCCESS, payload: result.data });
    } else {
      yield put({
        type: types.GET_ALL_PATIENT_FAILED,
        payload: result.message,
      });
    }
  } catch (error) {
    console.log(error.message);
    yield put({ type: types.GET_ALL_PATIENT_FAILED, payload: error.message });
  }
}

export default function* PatientSaga() {
  yield takeLatest(types.GET_ALL_PATIENT, getAllPatients);
}
