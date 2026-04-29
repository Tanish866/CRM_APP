import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosInstance from "../../config/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    role: localStorage.getItem("role") || "",
    data: JSON.parse(localStorage.getItem("data")) || {},
    isLoggedin: localStorage.getItem("isLoggedin") == "true" || false
};

export const login = createAsyncThunk('auth/signin', async(data) =>{
    try {
        const response =  axiosInstance.post('auth/signin', data);
        toast.promise(response, {
            loading: "Submitting form",
            success: "Successfully signed in",
            error: "Something went wrong, please try again!"
        });
        return await response;
    } catch (error) {
        console.log(error);
    }
});
export const signup = createAsyncThunk('auth/signup', async(data, {rejectWithValue}) => {
    try {
        const response = axiosInstance.post('auth/signup', data);
        toast.promise(response, {
            loading: "Submitting form",
            success: "Successfully signed up",
            error: "Something went wrong, please try again!"
        });
        return await response;
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.response?.data);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState, 
    reducers: {
        logout: (state) =>{
            localStorage.clear();
            state.role = '';
            state.data = undefined;
            state.token = '';
            state.isLoggedin = false;
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(login.fulfilled, (state, action) =>{
            if(!action.payload) return;
            console.log("payload", action);
            state.isLoggedin = (action.payload?.data?.token != undefined);
            state.data = action.payload?.data?.userData;
            state.role = action.payload?.data?.userData?.userType;
            state.token = action.payload?.data?.token;
            localStorage.setItem("role", action.payload?.data?.userData?.userType);
            localStorage.setItem("isLoggedin", (action.payload?.data?.token != undefined));
            localStorage.setItem("data", JSON.stringify(action.payload?.data?.userData));
            localStorage.setItem("token", action.payload?.data?.token);
        });
    }
});
export  const {logout} = authSlice.actions;
export default authSlice.reducer;
