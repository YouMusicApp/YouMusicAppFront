import axios from "axios";
import { setNewPassword } from "../redux/features/user/userSlice";

export const fetchEditUser = async (serverUrl, editUser, token, dispatch, setUserEdit) => {
    const response = await fetch(`${serverUrl}/api/user/edituser/${editUser._id}`, {
        method: "PUT",
        body: JSON.stringify(editUser),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    const data = await response.json();
    if (data.response) {
        dispatch(setUserEdit(editUser))
    }
}

export const fetchPutUser = async (id, userEdited, dispatch) => {
    try {
        await axios.put(`http://localhost:4000/users/${id}`, userEdited);
        await dispatch(setNewPassword(userEdited));
    } catch (error) { console.log(error) }
}

export const fetchLike = async (serverUrl, editUser, token, dispatch, setUserEdit) => {
    const response = await fetch(`${serverUrl}/api/user/edituser/${editUser._id}`, {
        method: "PUT",
        body: JSON.stringify(editUser),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    const data = await response.json();
    if (data.response) {
        dispatch(setUserEdit(editUser))
    }
}

//DEBERIAMOS BORRAR ESTE FETCH?
export const fetchUserEdited = async (id, editUser) => {
    try {
        await axios.put(`http://localhost:4000/users/${id}`, editUser);
    } catch (error) {
        console.log(error)
    }
}

export const fetchAddPlaylist = async (playlistAdded) => {
    try {
        await axios.put(`http://localhost:4000/playlists/${playlistAdded.id}`, playlistAdded)
    } catch (error) {
        console.log(error);
    }
}