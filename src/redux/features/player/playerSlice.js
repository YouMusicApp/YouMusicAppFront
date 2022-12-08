import { createSlice } from "@reduxjs/toolkit";


export const playerSlice = createSlice({
    name: "player",
    initialState: {
        track: '',
    },
    reducers: { 
        setTrack : (state, action) => {
            state.track = action.payload;
        }
    }
});

export const { setTrack } = playerSlice.actions;

export default playerSlice.reducer;
