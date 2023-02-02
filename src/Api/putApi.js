import axios from "axios";


export const fetchEditUser = async (id, editUser, token, dispatch, setUserEdit) => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/user/edituser/${id}`, {
        method: "PATCH",
        body: JSON.stringify(editUser),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    const data = await response.json();
    if (data) {
        dispatch(setUserEdit(editUser))
    }
}

export const fetchEditUserPlaylist = async (id, playlistUser, token, dispatch, setUserEdit) => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/user/edituserplaylist/${id}`, {
        method: "PATCH",
        body: JSON.stringify(playlistUser),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    const data = await response.json();
    if (data) {
        dispatch(setUserEdit(playlistUser))
    }
}
















