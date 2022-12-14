import { configureStore } from '@reduxjs/toolkit';
// reducer
import userSlice from './features/user/userSlice';
import trackSlice from './features/tracks/tracksSlice';
import albumSlice from './features/albums/albumsSlice';
import artistSlice from './features/artists/artistsSlice';
import playerSlice from './features/player/playerSlice';
import playlistSlice from './features/playlist/playlistSlice';
import genresSlice from './features/genres/genresSlice';

export default configureStore({
    reducer: {
        userSlice,
        trackSlice,
        albumSlice,
        playerSlice,
        playlistSlice,
        artistSlice,
        genresSlice
    }
});
