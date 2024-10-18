import {configureStore} from "@reduxjs/toolkit"
import userReducer from './features/auth/authSlide'

export const store = configureStore({
    reducer: {
        auth: userReducer
    }
});

