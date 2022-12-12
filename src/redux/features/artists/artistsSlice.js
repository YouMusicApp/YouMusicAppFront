import { createSlice } from "@reduxjs/toolkit";

export const artistSlice = createSlice({
    name: "artistsData",
    initialState: {
        list: []
    },
    reducers: {
        setArtistsList: (state, action) => {
            state.list = action.payload;
        }
    }
})

export const { setArtistsList } = artistSlice.actions;

export default artistSlice.reducer;