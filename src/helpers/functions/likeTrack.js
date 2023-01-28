import { fetchLike } from "../../Api/putApi";
import { setUserEdit, setUserLikedAlbum, setUserLikedArtist, setUserLikedPlaylist, setUserLikedTrack, setUserUnlikedAlbum, setUserUnlikedArtist, setUserUnlikedPlaylist, setUserUnlikedTrack } from "../../redux/features/user/userSlice";

export const likedTrack = async (data, usersData, dispatch, getAccessTokenSilently, serverUrl) => {
    const checkLiked = usersData.userLogged.liked_tracks.find((like) => like._id === data._id)
    const token = await getAccessTokenSilently();

    if (!checkLiked) {
        const userEdited = {
            ...usersData.userLogged,
            'liked_tracks': [...usersData.userLogged.liked_tracks, data]
        }
        fetchLike(serverUrl, userEdited, token, dispatch, setUserEdit);
        dispatch(setUserLikedTrack(data));
    } else {
        const unlikedTrack = usersData.userLogged.liked_tracks.filter((track) => {
            return track._id !== data._id
        })
        const userEdited = {
            ...usersData.userLogged,
            'liked_tracks': unlikedTrack
        }
        fetchLike(serverUrl, userEdited, token, dispatch, setUserEdit);
        dispatch(setUserUnlikedTrack(userEdited))
    }
}

export const likedAlbum = async (data, usersData, dispatch, getAccessTokenSilently, serverUrl) => {
    const checkLiked = usersData.userLogged.liked_album.find((like) => like._id === data._id);
    const token = await getAccessTokenSilently();
    
    if (!checkLiked) {
        const userEdited = {
            ...usersData.userLogged,
            'liked_album': [...usersData.userLogged.liked_album, data]
        }
        fetchLike(serverUrl, userEdited, token, dispatch, setUserEdit);
        dispatch(setUserLikedAlbum(data));
    } else {
        const unlikedAlbum = usersData.userLogged.liked_album.filter((album) => {
            return album._id !== data._id
        })
        const userEdited = {
            ...usersData.userLogged,
            'liked_album': unlikedAlbum
        }
        fetchLike(serverUrl, userEdited, token, dispatch, setUserEdit);
        dispatch(setUserUnlikedAlbum(userEdited))
    }
}

export const likedArtist = async (data, usersData, dispatch, getAccessTokenSilently, serverUrl) => {
    const checkLiked = usersData.userLogged.liked_artist.find((like) => like._id === data._id);
    const token = await getAccessTokenSilently();

    if (!checkLiked) {
        const userEdited = {
            ...usersData.userLogged,
            'liked_artist': [...usersData.userLogged.liked_artist, data]
        }
        fetchLike(serverUrl, userEdited, token, dispatch, setUserEdit);
        dispatch(setUserLikedArtist(data));
    } else {
        const unlikedArtist = usersData.userLogged.liked_artist.filter((artist) => {
            return artist._id !== data._id
        })
        const userEdited = {
            ...usersData.userLogged,
            'liked_artist': unlikedArtist
        }
        fetchLike(serverUrl, userEdited, token, dispatch, setUserEdit);
        dispatch(setUserUnlikedArtist(userEdited))
    }
}

export const likedPlaylist = async (data, usersData, dispatch, getAccessTokenSilently, serverUrl) => {
    const checkLiked = usersData.userLogged.myplaylists.find((like) => like._id === data._id);
    const token = await getAccessTokenSilently();
    
    if (!checkLiked) {
        const userEdited = {
            ...usersData.userLogged,
            'myplaylists': [...usersData.userLogged.myplaylists, data]
        }
        dispatch(setUserLikedPlaylist(data));
        fetchLike(serverUrl, userEdited, token, dispatch, setUserEdit);
    } else {
        const unlikedPlaylist = usersData.userLogged.myplaylists.filter((playlist) => playlist._id !== data._id)
        const userEdited = {
            ...usersData.userLogged,
            'myplaylists': unlikedPlaylist
        }
        dispatch(setUserUnlikedPlaylist(userEdited))
        fetchLike(serverUrl, userEdited, token, dispatch, setUserEdit);
    }
}