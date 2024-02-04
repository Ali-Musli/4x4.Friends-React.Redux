import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    maps: []
};

export const mapsSlice = createSlice({
    name: "maps",
    initialState,
    reducers: {
        fetchAllMaps: () => {},
        setAllMaps: (state, action) => {
            state.maps = [...action.payload]
        },
    }
})