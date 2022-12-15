
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { NavDropdown } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import ModalEditedPlaylist from '../Modals/ModalEditedPlaylist/ModalEditedPlaylist';
import { addSongToPlaylist } from '../../redux/features/playlist/playlistSlice';
import { fetchAddPlaylist } from '../../Api/putApi';
import { useEffect } from 'react';
import { useState } from 'react';

const DropdownDot = ({ data }) => {

    const dispatch = useDispatch();
    const usersData = useSelector(state => state.userSlice)
    const playlists = useSelector(state => state.playlistSlice.list);
    const playlist = usersData.isLogged ? playlists.filter((element) => element.userId === (usersData.userLogged.id)) : '';


    const addToPlaylist = (song, playlist) => {
        const selectedPlaylist = playlist.tracks.find((e) => e.id === song.id)
        if (!selectedPlaylist) {
            const playlistAdded = {
                ...playlist,
                'tracks': [...playlist.tracks, song]
            }
            const playlistTotal = playlists.map(p => playlistAdded.id === p.id ? {
                ...p,
                tracks: [...playlist.tracks, song]
            } : p)
            dispatch(addSongToPlaylist(playlistTotal))
            fetchAddPlaylist(playlistAdded)
        } else {
            console.log("ya la tienes")
            //add two buttons for add again and don't do i
            //quit from this playlist 
        }
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

                <Dropdown.Item > <ModalEditedPlaylist /> </Dropdown.Item>

                <NavDropdown.Divider />
                {usersData.isLogged &&
                    playlist.map((p) => {
                        return (

                            <NavDropdown.Item key={uuidv4()} onClick={() => addToPlaylist(data, p)} eventKey="1" > {p.name} </NavDropdown.Item>

                        )
                    })
                }

            </DropdownButton>
        </>
    )
}

export default DropdownDot