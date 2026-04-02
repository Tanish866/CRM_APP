import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "../Reducer/Slices/AuthSlice";
import ticketSliceReducer from "../Reducer/Slices/AuthSlice";

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        ticket: ticketSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
});
export default store;
