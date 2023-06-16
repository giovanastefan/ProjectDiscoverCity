import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer';
import establishmentReducer from '../reducers/establishmentReducer';

const store = configureStore({
  reducer: {
    userStore: userReducer,
    establishmentStore: establishmentReducer
  },
});

export default store;
