import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTrack } from '../../redux/features/player/playerSlice';
import { BsFillPlayFill } from "react-icons/bs";


export const TableSongs = ({ song }) => {
    const UsersData = useSelector(state => state.userSlice);
    const dispatch = useDispatch();

    console.log(song);

    const setPlayer = (song) => {
        UsersData.isLogged ? dispatch(setTrack(song)) : console.log('Tienes que logearte para escuchar la cancion');
    }

    return (
        <div className='container mb-4'>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Title</th>
                        <th scope="col">Artist</th>
                        <th scope="col">Genre</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='cursor-pointer'>
                        <td onClick={() => setPlayer(song)} className='cursor-pointer tdhover'><BsFillPlayFill /></td>
                        <td>{song.name}</td>
                        <td>{song.artist}</td>
                        <td>{song.genre}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
