import { createSlice } from "@reduxjs/toolkit";


export const genresSlice = createSlice({
    name: "genres",
    initialState: {
        list: [],
    },
    reducers: {
        setGenresList: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const { setGenresList } = genresSlice.actions;

export default genresSlice.reducer;
