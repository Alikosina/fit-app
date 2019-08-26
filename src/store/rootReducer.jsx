import { weightReducer } from "./weight/weightReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  weight: weightReducer
});
