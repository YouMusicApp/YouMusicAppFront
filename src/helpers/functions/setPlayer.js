import { setTrack } from "../../redux/features/player/playerSlice";

export const setPlayer = (songs, dispatch, usersData) => {
    usersData.isLogged ? dispatch(setTrack(songs)) : console.log('Tienes que logearte para escuchar la cancion');
}