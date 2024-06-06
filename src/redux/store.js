 import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../services/user/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
 

 