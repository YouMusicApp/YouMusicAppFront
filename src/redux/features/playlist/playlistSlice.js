import { createSlice } from "@reduxjs/toolkit";

export const playlistSlice = createSlice({
    name: "",
    initialState: {
        list: []
    },
    reducers: {
        setPlaylist: (state, action) => {
            state.playlist = action.payload;
        }
    },
});