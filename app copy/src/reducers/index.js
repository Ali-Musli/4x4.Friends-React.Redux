import { combineReducers } from "@reduxjs/toolkit";
import { trucksSlice } from './trucks'
import { mapsSlice } from './maps'
 
export default combineReducers({
    trucks: trucksSlice.reducer,
    maps: mapsSlice.reducer
})