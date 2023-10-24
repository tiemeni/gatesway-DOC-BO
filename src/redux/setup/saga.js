import { all } from 'redux-saga/effects';
import CommonSagas from '../common/saga';
import UserSaga from '../user/saga';
import PraticiensSaga from '../praticiens/saga';
import CivilitySaga from '../civility/saga';
import GroupeSaga from '../groupes/saga';
import SpecialitySaga from '../speciality/saga';
import LieuxSaga from '../lieux/saga';
import PatientSaga from '../patient/saga';
import MotifSaga from '../motifs/saga';

/**

 * @description combine sagas.

 */

export default function* Sagas() {
  yield all([
    CommonSagas(),
    UserSaga(),
    PraticiensSaga(),
    CivilitySaga(),
    GroupeSaga(),
    SpecialitySaga(),
    LieuxSaga(),
    PatientSaga(),
    MotifSaga(),
  ]);
}
