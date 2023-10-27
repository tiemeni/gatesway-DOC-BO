import { put, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import { incrementTime } from '../../utils/helpers';
import { deleteUnauthRequest, putUnauthRequest } from '../../utils/api';

const idc = localStorage.getItem('idc');
const BASE_URL = process.env.REACT_APP_LOCAL_URL;

/**
 * update informations about the current appointment.
 * @param {*} idCentre, date_long, date, startTime, endTIme
 */
function* updateAppointment({ payload }) {
  try {
    const query = {
      startTime: payload.heureDebut,
      endTime: incrementTime(payload.heureDebut, payload.duration),
      date: payload.date,
      centre: payload.idCentre,
      date_long: payload.date_long,
      duration: payload.duration,
      status: payload.status,
    };
    const url = `${BASE_URL}/appointments/update/${payload._id}/?idCentre=${idc}`;
    const result = yield putUnauthRequest(url, query);

    if (!result.success)
      yield put({
        type: types.UPDATE_APPOINTMENT_FAILED,
        error: "Une erreur est survenue lors de l'exécution de la requête",
      });

    yield put({ type: types.UPDATE_APPOINTMENT_SUCCESS });
  } catch (error) {
    yield put({ type: types.UPDATE_APPOINTMENT_FAILED, error });
  }
}

function* deleteAppointment({ payload }) {
  try {
    const result = yield deleteUnauthRequest(
      `${BASE_URL}/appointments/${payload}/?idCentre=${idc}`,
    );

    if (!result.success) yield put({ type: types.DELETE_APPOINTMENT_FAILED });
    yield put({ type: types.DELETE_APPOINTMENT_SUCCESS });
  } catch (error) {
    yield put({ type: types.DELETE_APPOINTMENT_FAILED });
  }
}

export default function* AppointmentsSaga() {
  yield takeLatest(types.UPDATE_APPOINTMENT_REQUEST, updateAppointment);
  yield takeLatest(types.DELETE_APPOINTMENT_REQUEST, deleteAppointment);
}
