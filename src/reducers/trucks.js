import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trucks: []
};

export const trucksSlice = createSlice({
    name: "trucks",
    initialState,
    reducers: {
        fetchTrucks: () => {},
        setTrucks: (state, action) => {
            state.trucks = [...action.payload]
        }
    }
})