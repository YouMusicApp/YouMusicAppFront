import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BsFillPlayFill } from "react-icons/bs";
import { setPlayer } from '../../helpers/functions/setPlayer';
import { v4 as uuidv4 } from 'uuid';
import { BsThreeDots } from "react-icons/bs";
import DropdownDot from '../DropdownDot/DropdownDot';



export const TableSongs = ({ songList }) => {
    const usersData = useSelector(state => state.userSlice);
    const dispatch = useDispatch();

    return (
        <div className='mx-2 mb-4'>
            <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Title</th>
                            <th scope="col">Artist</th>
                            <th scope="col">Genre</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            songList.map((track) => {
                                return (
                                    <tr key={uuidv4()} className='cursor-pointer'>
                                        <td onClick={() => setPlayer([track], dispatch, usersData)} className='cursor-pointer tdhover'><BsFillPlayFill /></td>
                                        <td>{track.name}</td>
                                        <td>{track.artist}</td>
                                        <td>{track.genre}</td>
                                        <td><DropdownDot /></td>
                                        

                                        {/* <button className='border-none'><BsThreeDots /> </button> */}

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
        </div>
    )
}
