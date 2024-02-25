import { createSlice } from "@reduxjs/toolkit";

const localStorageUser = localStorage.getItem("auth");

const initialState = {
    error: ""
};

export const errorSlice = createSlice({
    name: "error",
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});