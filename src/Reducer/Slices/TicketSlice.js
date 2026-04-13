import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    downloadTickets: [],
    ticketList: [],
    ticketDistribution: {
        open: 0,
        inProgress: 0,
        resolved: 0,
        onHold: 0,
        cancelled: 0
    }
}

export const getAllTicketForTheUser = createAsyncThunk('tickets/getAllTicketForTheUser', async () => {
    try {
        const responsePromise = axiosInstance.get('getMyAssignedTickets', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        });
        toast.promise(responsePromise, {
            success: 'Successfully loaded all the tickets',
            loading: 'Fetching tickets belonging to you',
            error: 'Something went wrong!'
        });
        return await responsePromise;
    } catch (error) {
        console.log(error);
    }
});

const ticketSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        filterTickets: (state, action) =>{
            console.log(action.payload);
            let status = action.payload.status.toLowerCase();
            if(status == "in progress") status = "inProgress";
            state.ticketList = state.downloadTickets.filter((ticket) => ticket.status == status);
        },
        resetTicketList: (state) =>{
            state.ticketList = state.downloadTickets;
        }
    },


    extraReducers: (builder) => {
        builder.addCase(getAllTicketForTheUser.fulfilled, (state, action) => {
            if (!action.payload) return;
            state.ticketList = action?.payload?.data?.result;
            const tickets = action?.payload?.data?.result;
            state.downloadTickets = action?.payload?.data?.result;
            state.ticketDistribution = {
                open: 0,
                inProgress: 0,
                resolved: 0,
                onHold: 0,
                cancelled: 0
            };
            tickets.forEach((ticket) => {
                state.ticketDistribution[ticket.status] = state.ticketDistribution[ticket.status] + 1;
            });
        })
    }
});

export const { filterTickets, resetTicketList } = ticketSlice.actions;

export default ticketSlice.reducer;
