import { put, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import { getUnauthRequest, postUnauthRequest } from '../../utils/api';

/**
 * @description ici le saga reducer
 */

function* getAllSpecialities() {
  const idc = localStorage.getItem('idc');
  try {
    const result = yield getUnauthRequest(
      `${process.env.REACT_APP_BASE_URL}/specialites/?idCentre=${idc}`,
    );
    if (result.success) {
      yield put({
        type: types.GET_ALL_SPECIALITIES_SUCCESS,
        payload: result.data,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
}

function* postSpecialities({ spec }) {
  const idc = localStorage.getItem('idc');
  const payload = {
    secretaryAlert: spec?.secretaryAlert,
    title: spec?.title,
    webAlert: spec?.webAlert,
    active: spec?.active || true,
    label: spec?.label,
    reference: spec?.reference,
  };
  try {
    const result = yield postUnauthRequest(
      `${process.env.REACT_APP_BASE_URL}/specialites/?idCentre=${idc}`,
      payload,
    );
    if (result.success) {
      yield put({
        type: types.POST_SPEC_REQUEST_SUCCESS,
      });
      yield put({ type: types.GET_ALL_SPECIALITIES });
      window.history.back();
    }
  } catch (error) {
    console.log(error.message);
    yield put({ type: types.POST_SPEC_REQUEST_FAILED, payload: error.message });
  }
}

export default function* SpecialitySaga() {
  yield takeLatest(types.GET_ALL_SPECIALITIES, getAllSpecialities);
  yield takeLatest(types.POST_SPEC_REQUEST, postSpecialities);
}
