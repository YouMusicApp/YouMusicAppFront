
import { fetchEditUser } from "../../Api/putApi";
import { setUserEdit, setUserLikedAlbum, setUserLikedArtist, setUserLikedPlaylist, setUserLikedTrack, setUserUnlikedAlbum, setUserUnlikedArtist, setUserUnlikedPlaylist, setUserUnlikedTrack } from "../../redux/features/user/userSlice";



export const likedTrack = async (data, userData, token, dispatch) => {

    const checkLiked = userData.userLogged.liked_tracks.find((like) => like._id === data._id)

    if (!checkLiked) {
        const editUser = {
            'liked_tracks': [...userData.userLogged.liked_tracks, data]
        }
        fetchEditUser(userData.userLogged._id, editUser, token, dispatch, setUserEdit);
        dispatch(setUserLikedTrack(data));
        console.log(editUser)
    } else {
        const unlikedTrack = userData.userLogged.liked_tracks.filter((track) => {
            return track._id !== data._id
        })
        const editUser = {
            'liked_tracks': unlikedTrack
        }
        fetchEditUser(userData.userLogged._id, editUser, token, dispatch, setUserEdit);
        dispatch(setUserUnlikedTrack(editUser))
    }
}


export const likedAlbum = async (data, userData, token, dispatch) => {
    const checkLiked = userData.userLogged.liked_album.find((like) => like._id === data._id);

    if (!checkLiked) {
        const editUser = {
            'liked_album': [...userData.userLogged.liked_album, data]
        }
        fetchEditUser(userData.userLogged._id, editUser, token, dispatch, setUserEdit);
        dispatch(setUserLikedAlbum(data));
    } else {
        const unlikedAlbum = userData.userLogged.liked_album.filter((album) => {
            return album._id !== data._id
        })
        const editUser = {
            'liked_album': unlikedAlbum
        }
        fetchEditUser(userData.userLogged._id, editUser, token, dispatch, setUserEdit);
        dispatch(setUserUnlikedAlbum(editUser))
    }
}

export const likedArtist = async (data, userData, token, dispatch) => {
    const checkLiked = userData.userLogged.liked_artist.find((like) => like._id === data._id);

    if (!checkLiked) {
        const editUser = {
            'liked_artist': [...userData.userLogged.liked_artist, data]
        }
        fetchEditUser(userData.userLogged._id, editUser, token, dispatch, setUserEdit);
        dispatch(setUserLikedArtist(data));

    } else {
        const unlikedArtist = userData.userLogged.liked_artist.filter((artist) => {
            return artist._id !== data._id
        })
        const editUser = {

            'liked_artist': unlikedArtist
        }
        fetchEditUser(userData.userLogged._id, editUser, token, dispatch, setUserEdit);
        dispatch(setUserUnlikedArtist(editUser))
    }
}

export const likedPlaylist = async (data, userData, token, dispatch) => {
    const checkLiked = userData.userLogged.myplaylists.find((like) => like._id === data._id);

    if (!checkLiked) {
        const editUser = {
            'myplaylists': [...userData.userLogged.myplaylists, data]
        }
        dispatch(setUserLikedPlaylist(data));
        fetchEditUser(userData.userLogged._id, editUser, token, dispatch, setUserEdit);
    } else {
        const unlikedPlaylist = userData.userLogged.myplaylists.filter((playlist) => playlist._id !== data._id)
        const editUser = {
            'myplaylists': unlikedPlaylist
        }
        dispatch(setUserUnlikedPlaylist(editUser))
        fetchEditUser(userData.userLogged._id, editUser, token, dispatch, setUserEdit);
    }
}