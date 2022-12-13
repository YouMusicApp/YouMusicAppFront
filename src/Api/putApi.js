import axios from "axios";
import { setNewPassword } from "../redux/features/user/userSlice";


export const fetchPutUser = async (id, userEdited, dispatch) => {
    try {
        await axios.put(`http://localhost:4000/users/${id}`, userEdited);
        await dispatch(setNewPassword(userEdited));
    } catch (error) { console.log(error) }
}

export const fetchLikeTrack = async (userEdited) => {
    try {
        await axios.put(`http://localhost:4000/users/${userEdited.id}`, userEdited);
    } catch (error) {
        console.log(error)
    }
}

export const fetchLikeAlbum = async (userEdited) => {
    try {
        await axios.put(`http://localhost:4000/users/${userEdited.id}`, userEdited)
    } catch (error) {
        console.log(error);
    }
}

export const fetchLikePlaylist = async (userEdited) => {
    try {
        await axios.put(`http://localhost:4000/users/${userEdited.id}`, userEdited)
    } catch (error) {
        console.log(error);
    }
}

export const fetchUserEdited = async (id, editUser) => {
    try {
        await axios.put(`http://localhost:4000/users/${id}`, editUser);
    } catch (error) {
        console.log(error)
    }
}

export const fetchLikeArtist = async (userEdited) => {
    try {
        await axios.put(`http://localhost:4000/users/${userEdited.id}`, userEdited)
    } catch (error) {
        console.log(error);
    }
}