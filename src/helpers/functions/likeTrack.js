import { fetchLikeAlbum, fetchLikeArtist, fetchLikePlaylist, fetchLikeTrack } from "../../Api/putApi";
import { setUserLikedAlbum, setUserLikedArtist, setUserLikedPlaylist, setUserLikedTrack, setUserUnlikedAlbum, setUserUnlikedArtist, setUserUnlikedPlaylist, setUserUnlikedTrack } from "../../redux/features/user/userSlice";

export const likedTrack = (data, usersData, dispatch) => {
    const checkLiked = usersData.userLogged.liked_tracks.find((like) => like.id === data.id)
    if (!checkLiked) {
        const userEdited = {
            ...usersData.userLogged,
            'liked_tracks': [...usersData.userLogged.liked_tracks, data]
        }
        fetchLikeTrack(userEdited);
        dispatch(setUserLikedTrack(data));
    } else {
        const unlikedTrack = usersData.userLogged.liked_tracks.filter((track) => {
            return track.id !== data.id
        })
        const userEdited = {
            ...usersData.userLogged,
            'liked_tracks': unlikedTrack
        }
        fetchLikeTrack(userEdited);
        dispatch(setUserUnlikedTrack(userEdited))
    }
}

export const likedAlbum = (data, usersData, dispatch) => {
    const checkLiked = usersData.userLogged.liked_album.find((like) => like.id === data.id);
    if (!checkLiked) {
        const userEdited = {
            ...usersData.userLogged,
            'liked_album': [...usersData.userLogged.liked_album, data]
        }
        fetchLikeAlbum(userEdited);
        dispatch(setUserLikedAlbum(data));
    } else {
        const unlikedAlbum = usersData.userLogged.liked_album.filter((album) => {
            return album.id !== data.id
        })
        const userEdited = {
            ...usersData.userLogged,
            'liked_album': unlikedAlbum
        }
        fetchLikeAlbum(userEdited);
        dispatch(setUserUnlikedAlbum(userEdited))
    }
}

export const likedArtist = (data, usersData, dispatch) => {
    const checkLiked = usersData.userLogged.liked_artist.find((like) => like.id === data.id);

    if (!checkLiked) {
        console.log('like');
        const userEdited = {
            ...usersData.userLogged,
            'liked_artist': [...usersData.userLogged.liked_artist, data]
        }
        fetchLikeArtist(userEdited);
        dispatch(setUserLikedArtist(data));
    } else {
        console.log('dislike');
        const unlikedArtist = usersData.userLogged.liked_artist.filter((artist) => {
            return artist.id !== data.id
        })
        const userEdited = {
            ...usersData.userLogged,
            'liked_artist': unlikedArtist
        }
        fetchLikeArtist(userEdited);
        dispatch(setUserUnlikedArtist(userEdited))
    }
}

export const likedPlaylist = (data, usersData, dispatch) => {
    const checkLiked = usersData.userLogged.myplaylists.find((like) => like.id === data.id);

    if (!checkLiked) {
        const userEdited = {
            ...usersData.userLogged,
            'myplaylists': [...usersData.userLogged.myplaylists, data]
        }

        dispatch(setUserLikedPlaylist(data));
        fetchLikePlaylist(userEdited);
    } else {
        const unlikedPlaylist = usersData.userLogged.myplaylists.filter((playlist) => playlist.id !== data.id)
        const userEdited = {
            ...usersData.userLogged,
            'myplaylists': unlikedPlaylist
        }
        dispatch(setUserUnlikedPlaylist(userEdited))
        fetchLikePlaylist(userEdited);
    }
}