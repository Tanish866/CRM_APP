import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axiosInstance from "../../config/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    ticketList: []
}

export const getAllTicketForTheUser = createAsyncThunk('tickets/getAllTicketForTheUser', async() => {
    try {
        const response = axiosInstance.get('getMyAssignedTickets', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        });
        toast.promise(response, {
            success: 'Successfully loaded all the tickets',
            loading: 'Fetching tickets belonging to you',
            error: 'Something went wrong!'
        });
        return await response;
    } catch (error) {
        console.log(error);
    }
});
const ticketSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllTicketForTheUser.fulfilled, (state, action) => {
            if(!action.payload) return;
            state.ticketList = action?.payload?.data;
        })
    }
});

export default ticketSlice.reducer;
