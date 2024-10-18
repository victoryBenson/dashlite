import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import authService from './authService';

const initialState = {
    user: null,
    isLoading: false,
    isAuthenticated: false,
    isError: false,
    token: ""
};


//loginUser
export const login = createAsyncThunk(
    'user/login',
    async(userData, thunkAPI) => {
        try {
            return await authService.login(userData)
        }catch(error){
            const message = (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) ||
            error.message || 
            error.toString();
            console.log(error.message)
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        ResetState: (state) => {
            state.isError = false;
            state.isAuthenticated = false;
            state.isError = false;
            state.user = null
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            sessionStorage.removeItem('token');
        },
    },
    extraReducers:(builder) => {
        builder
        .addCase(login.pending, (state) => {
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            console.log(action.payload)
        })
        .addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload.message;
            console.log(action.payload)
        })
    }
})


export const {ResetState, logout} = userSlice.reducer;
export default userSlice.reducer