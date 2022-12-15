
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { fetchEditedPlaylist } from '../../Api/putApi';
import { setUserDeletedPlaylist, setUserEditedPlaylist } from '../../redux/features/user/userSlice';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';

const DropdownMap = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.userSlice)
    const playlists = useSelector(state => state.playlistSlice.list);
    const playlist = playlists.find((element) => element.userId === parseInt(userId));

    // const filter = playlists.map((playlist) => {
    //     return (playlist.name)
    // })
 
    console.log(playlist)
    console.log(playlists)
   
    // console.log(filter)
 

    const addedTrackToPlaylist = (data) => {
        // const checkEdited = usersData.userLogged.edited_playlists.find((like) => like.id === data.id)
        // if (!checkEdited) {
        //     const userEdited = {
        //         ...usersData.userLogged,
        //         'edited_playlists': [...usersData.userLogged.edited_playlists, data]
        //     }
        //     fetchEditedPlaylist(userEdited);
        //     dispatch(setUserEditedPlaylist(data));
        // } else {

        //     const unlikedTrack = usersData.userLogged.edited_playlists.filter((track) => {
        //         return track.id !== data.id
        //     })
        //     const deleteTrack = {
        //         ...usersData.userLogged,
        //         'edited_playlists': deleteTrack
        //     }
        //     fetchEditedPlaylist(deleteTrack);
        //     dispatch(setUserDeletedPlaylist(deleteTrack))
        // }
    }

    return (
        <>


            <DropdownButton
                className=''
                drop=''
                variant=""
                title=<BsThreeDots className=''
                />

            >
                {playlists.map((playlist) => {
                    return (
                        <>
                            <Dropdown.Item key={uuidv4()} eventKey="1" > {playlist.name} </Dropdown.Item>
                        </>
                    )
                })
                }



            </DropdownButton>
        </>
    )
}

export default DropdownMap