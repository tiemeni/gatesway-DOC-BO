import { combineReducers } from 'redux';
import CommonReducer from '../common/reducers';
import UserReducers from '../user/reducers';

const rootReducer = combineReducers({
  Common: CommonReducer,
  User: UserReducers,
});

export default rootReducer;
