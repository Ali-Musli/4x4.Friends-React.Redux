import { createSlice } from "@reduxjs/toolkit";

const localStorageUser = localStorage.getItem("auth");

const initialState = {
    user: localStorageUser ? JSON.parse(localStorageUser) : {} // Object ot array?
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        fetchRegister: () => {},
        fetchLogin: () => {},
        setUser: (state, action) => {
            state.user = action.payload
        },
        removeUser: () => {},
    }
});