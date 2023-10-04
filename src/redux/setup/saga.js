import { all } from 'redux-saga/effects';
import CommonSagas from '../common/saga';
import UserSaga from '../user/saga';

/**

 * @description combine sagas.

 */

export default function* Sagas() {
  yield all([CommonSagas(), UserSaga()]);
}
