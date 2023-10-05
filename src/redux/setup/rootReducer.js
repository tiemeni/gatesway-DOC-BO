import { combineReducers } from 'redux';
import CommonReducer from '../common/reducers';
import UserReducers from '../user/reducers';
import PraticiensReducer from '../praticiens/reducer';

const rootReducer = combineReducers({
  Common: CommonReducer,
  User: UserReducers,
  Praticiens: PraticiensReducer,
});

export default rootReducer;
