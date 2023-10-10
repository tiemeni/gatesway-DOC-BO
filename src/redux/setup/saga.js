import { all } from 'redux-saga/effects';
import CommonSagas from '../common/saga';
import UserSaga from '../user/saga';
import PraticiensSaga from '../praticiens/saga';

/**

 * @description combine sagas.

 */

export default function* Sagas() {
  yield all([CommonSagas(), UserSaga(), PraticiensSaga()]);
}