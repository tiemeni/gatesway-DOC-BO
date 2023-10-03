import { combineReducers } from "redux";
import CommonReducer from "../common/reducers";

const rootReducer = combineReducers({
    Common: CommonReducer,
})

export default rootReducer;