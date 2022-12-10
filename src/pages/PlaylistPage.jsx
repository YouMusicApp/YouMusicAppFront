import React from 'react'
import { BsFillPlayFill, BsSuitHeartFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setPlayer } from '../helpers/functions/setPlayer';


export const PlaylistPage = () => {
    const { id } = useParams();
    const usersData = useSelector(state => state.userSlice);
    const playlists = useSelector(state => state.playlistSlice.list);
    const playlist = playlists.find((element) => element.id === parseInt(id));
    const dispatch = useDispatch();


    const info = playlist.tracks;



    return (
        <>

            <div className="mx-0 song">
                <div className="">
                    <div className="">
                        <div className="card-body little-profile p-4">
                            <div className='text-center'>
                                <div className="song">
                                    <img src={playlist.thumbnail} alt="user" />
                                </div>
                                <h3 className="m-b-0">{playlist.tracks.name}</h3>
                                <p>{playlist.name}</p>
                            </div>
                            <div className='containerButton--songpage'>
                                <button className="m-t-10 mx-2 waves-effect waves-dark btn btn-dark btn-svg btn-md btn-rounded containerButton--songpage__button" data-abc="true" onClick={() => setPlayer([playlist], dispatch, usersData)} ><BsFillPlayFill /></button>
                                <button className="m-t-10 mx-2 waves-effect waves-dark btn btn-dark btn-svg btn-md btn-rounded containerButton--songpage__button" data-abc="true"  > <BsSuitHeartFill /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-2 mb-4'>
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

                        {info.map((item) =>{
                        return (
                            <>
                            <tr className='cursor-pointer' key={item.id}>
                                <td onClick={() => setPlayer(playlist)} className='cursor-pointer tdhover'><BsFillPlayFill /></td>
                                <td>{item.name} </td>
                                <td>{item.artist}</td>
                                <td>{item.genre}</td>

                            </tr>
                            </>
                        )})}


                    </tbody>
                </table>
            </div>


        </>
    )
}