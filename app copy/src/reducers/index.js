import { combineReducers } from "@reduxjs/toolkit";
import { trucksSlice } from './trucks'
import { mapsSlice } from './maps'
import { authSlice } from './auth'
import { errorSlice } from "./errors";
 
export default combineReducers({
    trucks: trucksSlice.reducer,
    maps: mapsSlice.reducer,
    auth: authSlice.reducer,
    error: errorSlice.reducer,
})