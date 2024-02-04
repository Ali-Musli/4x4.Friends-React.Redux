import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    maps: [],
    mapById: {}
};

export const mapsSlice = createSlice({
    name: "maps",
    initialState,
    reducers: {
        fetchAllMaps: () => {},
        setAllMaps: (state, action) => {
            state.maps = [...action.payload]
        },
        fetchMapById: () => {},
        setMapById: (state, action) => {
            state.mapById = action.payload
        }
    }
})