import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {} // Object ot array?
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        fetchLogin: () => {},
        setUser: (state, action) => {
            state.user = action.payload
        },
    }
});