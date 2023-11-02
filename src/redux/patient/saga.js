import { put, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import { getUnauthRequest, postUnauthRequest } from '../../utils/api';

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
function* postPatient({ patient }) {
  const idc = localStorage.getItem('idc');
  const payload = {
    civility: patient?.civility,
    name: patient.name,
    surname: patient.surname,
    birthdate: patient.birthdate,
    telephone: patient.telephone,
    email: patient.email,
    initiales: patient.initiales,
    active: patient.active ? 1 : 2,
    idCentre: idc,
  };
  try {
    const result = yield postUnauthRequest(
      `${process.env.REACT_APP_BASE_URL}/patients/register/?idCentre=${idc}`,
      payload,
    );
    if (result.success) {
      yield put({
        type: types.POST_PATIENT_REQUEST_SUCCESS,
      });
      yield put({ type: types.GET_ALL_PATIENT });
      window.history.back();
    } else {
      yield put({
        type: types.POST_PATIENT_REQUEST_FAILED,
        payload: result.message,
      });
    }
  } catch (error) {
    yield put({
      type: types.POST_PATIENT_REQUEST_FAILED,
      payload: error.message,
    });
  }
}

export default function* PatientSaga() {
  yield takeLatest(types.GET_ALL_PATIENT, getAllPatients);
  yield takeLatest(types.POST_PATIENT_REQUEST, postPatient);
}
