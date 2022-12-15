
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';



import { NavDropdown } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const DropdownDot = () => {

    const dispatch = useDispatch();
    const usersData = useSelector(state => state.userSlice)
  

    const playlists = useSelector(state => state.playlistSlice.list);
    const playlist = playlists.filter((element) => element.userId === (usersData.userLogged.id));

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
                title=<BsThreeDots className=''
                
                />
                
            >
            
                <Dropdown.Item eventKey="1" >Add to new playlist</Dropdown.Item>
                <NavDropdown.Divider />
                    {playlist.map((p) => {
                        return (
                            <>
                                <NavDropdown.Item key={uuidv4()} eventKey="1" > {p.name} </NavDropdown.Item>
                            </>
                        )
                    })
                    }
                
            </DropdownButton>
        </>
    )
}

export default DropdownDot