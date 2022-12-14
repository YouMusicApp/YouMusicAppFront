// axios
import axios from "axios";
import { setAlbumsList } from "../redux/features/albums/albumsSlice";
import { setPlaylistsList } from "../redux/features/playlist/playlistSlice";
import { setTracksList } from "../redux/features/tracks/tracksSlice";
import { setArtistsList } from "../redux/features/artists/artistsSlice";
import { setUserList, setUserLogged } from "../redux/features/user/userSlice";
import { setGenresList } from "../redux/features/genres/genresSlice";

export const fetchGetUsers = async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:4000/users');
        await dispatch(setUserList(response.data));
    } catch (error) {
        console.log(error);
    };
}

export const fetchGetTracks = async (dispatch) => {
    try {
        const resp = await axios.get('http://localhost:4000/tracks');
        await dispatch(setTracksList(resp.data));
    } catch (error) {
        console.log(error);
    }
}

export const fetchGetAlbums = async (dispatch) => {
    try {
        const resp = await axios.get('http://localhost:4000/albums')
        await dispatch(setAlbumsList(resp.data));

    } catch (error) {
        console.log(error);
    }
}

export const fetchGetArtists = async (dispatch) => {
    try {
        const resp = await axios.get('http://localhost:4000/artists')
        await dispatch(setArtistsList(resp.data));
    } catch (error) {
        console.log(error);
    }
}

export const fetchGetPlaylists = async (dispatch) => {
    try {
        const resp = await axios.get('http://localhost:4000/playlists');
        await dispatch(setPlaylistsList(resp.data));
    } catch (error) {
        console.log(error);
    }
}

export const fetchGetGenresList = async (dispatch) => {
    try {
        const resp = await axios.get('http://localhost:4000/genres');
        await dispatch(setGenresList(resp.data));
    } catch (error) {
        console.log(error);
    }
}

export const functionLogin = (e, userData, dispatch) => {
    const new_user = {
        email: e.target.email.value,
        password: e.target.password.value
    }
    // auth new_user
    const interim_user = (userData.list).find(user => user.userData.email === new_user.email)
    if (interim_user && interim_user.userData.password === new_user.password) {
        dispatch(setUserLogged(interim_user));
        
    } else { alert("Incorrect Password"); }
}