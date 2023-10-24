import { put, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import { incrementTime } from '../../utils/helpers';
import { putUnauthRequest } from '../../utils/api';

const idc = localStorage.getItem('idc');

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
    const url = `${process.env.REACT_APP_LOCAL_URL}/appointments/update/${payload._id}/?idCentre=${idc}`;
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

export default function* AppointmentsSaga() {
  yield takeLatest(types.UPDATE_APPOINTMENT_REQUEST, updateAppointment);
}
