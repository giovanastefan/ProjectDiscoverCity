import { combineReducers } from "redux";
import userReducer from "./userReducer";
import establishmentReducer from "./establishmentReducer";

const rootReducer = combineReducers({
  userStore: userReducer,
  establishmentStore: establishmentReducer
});

export type RootState = ReturnType<typeof rootReducer>;
