import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosInstance from "../../config/axiosInstance";

const initialState = {
    role: localStorage.getItem("role") || "",
    data: JSON.parse(localStorage.getItem("data")) || {},
    isLoggedin: localStorage.getItem("isLoggedin") == "true" || false
};

export const login = createAsyncThunk('auth/signin', async(data) =>{
    try {
        const response = await axiosInstance.post('auth/signin', data);
        return response;
    } catch (error) {
        console.log(error);
    }
});
export const signup = createAsyncThunk('auth/signup', async(data) =>{
    try {
        const response = await axiosInstance.post('auth/signup', data);
        return response;
    } catch (error) {
        console.log(error);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState, 
    reducers: {},
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
export default authSlice.reducer;