import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { setPlayer } from '../../../helpers/functions/setPlayer';

export const TopInfoArtist = ({data, arraySongs}) => {
    const dispatch = useDispatch();
    const UsersData = useSelector(state => state.userSlice);

    return (
        <div className="mx-0 song">
            <div className="">
                <div className="">
                    <div className="card-body little-profile p-4">
                        <div className='text-center'>
                            <div className="song">
                                <img src={data.photoUrl} className='rounded-circle' alt="user" />
                            </div>
                            <h3 className="m-b-0">{data.name}</h3>
                            <p className='icon__popularity--star'>{data.popularity}/100 <AiFillStar /></p>
                        </div>
                        <div className='containerButton--songpage'>
                            <button className="m-t-10 mx-2 waves-effect waves-dark btn btn-dark btn-svg btn-md btn-rounded containerButton--songpage__button" data-abc="true" onClick={() => setPlayer(arraySongs, dispatch, UsersData)} ><BsFillPlayFill /></button>
                            <button className="m-t-10 mx-2 waves-effect waves-dark btn btn-dark btn-svg btn-md btn-rounded containerButton--songpage__button" data-abc="true"  > <AiOutlineHeart /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}