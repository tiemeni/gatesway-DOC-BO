import { put, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import { getUnauthRequest } from '../../utils/api';
import { formatUserName } from '../../utils/helpers';

const { REACT_APP_BASE_URL } = process.env;

const idc = localStorage.getItem('idc');

/**
 * @description ici le saga reducer de l'evenement RESET_APP
 */

function* getPraticiens() {
  try {
    const res = yield getUnauthRequest(
      `${REACT_APP_BASE_URL}/users/profession/?isPraticien=true&idCentre=${idc}`,
    );
    if (!res.success) {
      yield put({
        type: types.GET_PRATICIENS_FAILED,
        payload: {
          error: "Quelque chose s'est mal passé./nVeuillez réessayer plus tard",
        },
      });
    }

    const storedList = localStorage.getItem(`practitionerCheckedList${idc}`);
    let selectedPractitioner = '';
    let selectedValues = {};
    // if checked practitioner was saved
    if (storedList) {
      const namesList = localStorage
        .getItem(`practitionerCheckedListNames${idc}`)
        .split(';');
      selectedPractitioner = storedList.split(';');
      selectedValues = {
        idsList: selectedPractitioner,
        namesList,
      };
    } else {
      const profession = Object.keys(res.data)[0];
      [selectedPractitioner] = res.data[profession];
      selectedValues = {
        idsList: [selectedPractitioner._id],
        namesList: [
          formatUserName(
            selectedPractitioner.name,
            selectedPractitioner.surname,
          ),
        ],
      };
    }
    localStorage.setItem(
      `practitionerCheckedList${idc}`,
      selectedValues.idsList.join(';'),
    );
    localStorage.setItem(
      `practitionerCheckedListNames${idc}`,
      selectedValues.namesList.join(';'),
    );

    yield put({
      type: types.GET_PRATICIENS_SUCCESS,
      payload: { res, selectedValues },
    });
  } catch (error) {
    console.error('error', error);
    yield put({
      type: types.GET_PRATICIENS_FAILED,
      payload: { error: error?.message },
    });
  }
}

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
    yield put({ type: types.GET_ALL_PRATICIENS_SUCCESS, payload: res });
  } catch (error) {
    yield put({
      type: types.GET_ALL_PRATICIENS_FAILED,
      payload: { error: error?.message },
    });
  }
}

export default function* PraticiensSaga() {
  yield takeLatest(types.GET_PRATICIENS_REQUEST, getPraticiens);
  yield takeLatest(types.GET_ALL_PRATICIENS_REQUEST, getAllPraticiens);
}
