import * as types from "./types";
import { takeLatest } from "redux-saga/effects";

/**
 * @description ici le saga reducer de l'evenement RESET_APP
 */

function* resetApp() {
  yield console.log("reset app saga common reducer");
}

export default function* CommonSagas() {
  yield takeLatest(types.RESET_APP, resetApp);
}
