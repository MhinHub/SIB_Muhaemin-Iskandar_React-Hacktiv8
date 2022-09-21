import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../users/userSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
});
