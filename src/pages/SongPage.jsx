import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Slider from '../Components/Slider/Slider'
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";
import { setPlayer } from '../helpers/functions/setPlayer';
import { breakpoints_small } from '../helpers/functions/breackpoint';


const SongPage = () => {
    const { id } = useParams();
    const tracks = useSelector(state => state.trackSlice);
    const usersData = useSelector(state => state.userSlice);
    const song = tracks.list.find((track) => track.id === parseInt(id));
    const dispatch = useDispatch();

    return (
        <>
            <div className="mx-0 song">
                <div className="">
                    <div className="">
                        <div className="card-body little-profile p-4">
                            <div className='text-center'>
                                <div className="song">
                                    <img src={song.thumbnail} alt="user" />
                                </div>
                                <h3 className="m-b-0">{song.name}</h3>
                                <p>{song.artist}</p>
                            </div>
                            <div className='containerButton--songpage'>
                                <button className="m-t-10 mx-2 waves-effect waves-dark btn btn-dark btn-svg btn-md btn-rounded containerButton--songpage__button" data-abc="true" onClick={() => setPlayer([song], dispatch, usersData)} ><BsFillPlayFill /></button>
                                {
                                    usersData.isLogged ? <button className='m-t-10 mx-2 waves-effect waves-dark btn btn-dark btn-svg btn-md btn-rounded containerButton--songpage__button'>{
                                        usersData.userLogged.liked_tracks.find((like) => like.id === song.id) ? <BsSuitHeartFill /> : <BsSuitHeart />
                                    }</button> : ""
                                }
                                {/* <button className="m-t-10 mx-2 waves-effect waves-dark btn btn-dark btn-svg btn-md btn-rounded containerButton--songpage__button" data-abc="true"  > <BsSuitHeart /></button>
 */}                            </div>
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
                        <tr className='cursor-pointer'>
                            <td onClick={() => setPlayer(song)} className='cursor-pointer tdhover'><BsFillPlayFill /></td>
                            <td>{song.name}</td>
                            <td>{song.artist}</td>
                            <td>{song.genre}</td>

                        </tr>

                    </tbody>
                </table>
            </div>


            <div className='mx-2 mt-2'>
                <Slider
                    slidesPerView={1}
                    size='small'
                    img='img__small'
                    array={tracks.list}
                    title='Tracks'
                    breakpoints={breakpoints_small}
                />
            </div>
        </>
    )
}

export default SongPage