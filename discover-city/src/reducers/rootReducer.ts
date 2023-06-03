import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  userStore: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
