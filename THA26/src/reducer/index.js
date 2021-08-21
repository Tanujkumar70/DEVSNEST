// root file of all reducer
// simply import
import u from "./u";
import e from "./e";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  u,
  e
});

export default rootReducer;
