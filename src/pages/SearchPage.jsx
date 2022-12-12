import React from 'react'
import { useSelector } from 'react-redux';

const SearchPage = () => {
    const albums = useSelector(state => state.albumSlice);
    const tracks = useSelector(state => state.trackSlice);
    const userData = useSelector(state => state.userSlice);
    const playlists = useSelector(state => state.playlistSlice);
    console.log(albums);
    console.log(tracks);
    console.log(userData);
    console.log(playlists);
    return (
        <div>SearchPage</div>
    )
}

export default SearchPage