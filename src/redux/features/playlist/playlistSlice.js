import { createSlice } from "@reduxjs/toolkit";

export const playlistSlice = createSlice({
    name: "",
    initialState: {
        followers: [],
        playlist: []
    },
    reducers: {
        addPlaylist: (state, action) => {
            state.playlist = action.payload;
        }
    },
});