import { combineReducers } from "@reduxjs/toolkit";
import { trucksSlice } from './trucks'

export default combineReducers({
    trucks: trucksSlice.reducer
})