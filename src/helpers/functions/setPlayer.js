import Swal from "sweetalert2";
import { setTrack } from "../../redux/features/player/playerSlice";

export const setPlayer = (songs, dispatch, usersData) => {
    usersData.isLogged ? dispatch(setTrack(songs)) 
    : Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'You must be logged',
        showConfirmButton: false,
        timer: 1500
    });
}