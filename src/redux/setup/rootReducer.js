import { combineReducers } from 'redux';
import CommonReducer from '../common/reducers';
import UserReducers from '../user/reducers';
import PraticiensReducer from '../praticiens/reducer';
import CivilityReducers from '../civility/reducers';
import GroupesReducers from '../groupes/reducers';
import SpecialityReducers from '../speciality/reducers';
import LieuxReducers from '../lieux/reducers';
import PatientReducers from '../patient/reducers';
import MotifReducers from '../motifs/reducers';

const rootReducer = combineReducers({
  Common: CommonReducer,
  User: UserReducers,
  Praticiens: PraticiensReducer,
  Civilities: CivilityReducers,
  Groupes: GroupesReducers,
  Specialities: SpecialityReducers,
  Lieux: LieuxReducers,
  Patient: PatientReducers,
  Motifs: MotifReducers,
});

export default rootReducer;
