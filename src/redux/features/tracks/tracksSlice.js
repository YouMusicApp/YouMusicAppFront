import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice({
    name: "tracksData",
    initialState: {
        list: []
    },
    reducers: {
        setTracksList: (state, action) => {
            state.list = action.payload;
       
        }
        
    }
})

export const { setTracksList } = trackSlice.actions;

export default trackSlice.reducer;