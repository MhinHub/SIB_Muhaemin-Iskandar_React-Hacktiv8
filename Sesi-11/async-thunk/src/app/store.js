import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../users/userSlice";
// import logger from "redux-logger";

export const store = configureStore({
    reducer: {
        users: usersReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});