import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    role: localStorage.getItem("role") || "",
    data: localStorage.getItem("data") || {},
    isLoggedin: localStorage.getItem("isLoggedin") || false
};

const authSlice = createSlice({
    name: 'auth',
    initialState, 
    reducers: {}
});
export default authSlice.reducer;