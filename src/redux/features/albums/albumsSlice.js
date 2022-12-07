import { createSlice } from "@reduxjs/toolkit";

export const albumSlice = createSlice({
    name: "albumsData",
    initialState: {
        list: []
    },
    reducers: {
        setAlbumsList: (state, action) => {
            state.list = action.payload;
        }
    }
})

export const { setAlbumsList } = albumSlice.actions;

export default albumSlice.reducer;