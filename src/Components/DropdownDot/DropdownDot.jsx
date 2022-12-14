
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { fetchEditedPlaylist } from '../../Api/putApi';
import { setUserDeletedPlaylist, setUserEditedPlaylist } from '../../redux/features/user/userSlice';

const DropdownDot = () => {

    const dispatch = useDispatch();
    const usersData = useSelector(state => state.userSlice)
    console.log(usersData)

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
                className='my-dropdown-toggle dot'
                drop=''
                variant=""
                title=<BsThreeDots className='icon color-purple'
                />
            >
                <Dropdown.Item eventKey="1" onClick={addedTrackToPlaylist}>Add to playlist</Dropdown.Item>
                <Dropdown.Item eventKey="2">Share</Dropdown.Item>

            </DropdownButton>
        </>
    )
}

export default DropdownDot