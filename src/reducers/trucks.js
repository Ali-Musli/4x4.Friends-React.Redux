import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trucks: [],
    truck: {}
};

export const trucksSlice = createSlice({
    name: "trucks",
    initialState,
    reducers: {
        fetchTrucks: () => {},
        setTrucks: (state, action) => {
            state.trucks = [...action.payload]
        },
        fetchTruckById: (state, action) => {},
        setTruckById: (state, action) => {
            state.truck = action.payload
        }
    }
})