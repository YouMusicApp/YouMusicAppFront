import { configureStore } from '@reduxjs/toolkit';
// reducer
import userSlice from './features/user/userSlice';
import trackSlice from './features/tracks/tracksSlice';
import albumSlice from './features/albums/albumsSlice';
import playerSlice from './features/player/playerSlice';

export default configureStore({
    reducer: {
        userSlice,
        trackSlice,
        albumSlice,
        playerSlice
    }
});
