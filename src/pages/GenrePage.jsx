import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BsFillPlayFill } from "react-icons/bs";
import { setPlayer } from '../helpers/functions/setPlayer';
import { v4 as uuidv4 } from 'uuid';
import Slider from '../Components/Slider/Slider';
import { breakpoints_small } from '../helpers/functions/breakpoint';
import { TableSongs } from '../Components/TableSongs/TableSongs';


const GenrePage = () => {
    const { genre } = useParams();


    const tracks = useSelector(state => state.trackSlice.list);
    const usersData = useSelector(state => state.userSlice);
    const song_same_genre = tracks.filter((track) => track.genre === genre);
    const dispatch = useDispatch();

    return (
        <>
            {
                song_same_genre.length >= 1 ? (

                    <>
                        <div className="mx-0 ">
                            <div className="">
                                <div className="">
                                    <img className="card-img-top" src="https://st.depositphotos.com/1000423/5012/i/600/depositphotos_50124151-stock-photo-music-background.jpg" alt="Cimage" />
                                    <div className="card-body little-profile text-center p-2">
                                        <div className="pro-img"><img src='https://png.pngtree.com/png-clipart/20221027/ourmid/pngtree-music-logo-png-image_6389182.png' alt="user" /></div>
                                        <div >
                                            <h2>{genre} </h2>
                                            <p>Music</p>
                                        </div>
                                        <button className="m-t-10 mx-2 waves-effect waves-dark btn btn-dark btn-svg btn-md btn-rounded containerButton--songpage__button" data-abc="true" onClick={() => setPlayer(song_same_genre, dispatch, usersData)} ><BsFillPlayFill /></button>
                                        {/* <button href="#" type="submit" className="btn btn-primary profile">Edit</button> */}
                                        {/* <a className="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded" data-abc="true">Follow</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <TableSongs songList={song_same_genre} />

                        <div className="cardContainer titleCards">
                            <Slider
                                slidesPerView={1}
                                size='small'
                                img='img__small'
                                array={tracks}
                                title='Tracks'
                                breakpoints={breakpoints_small}
                            />
                        </div>
                    </>
                )
                    : 'There are no songs :('
            }
        </>
    )
}

export default GenrePage