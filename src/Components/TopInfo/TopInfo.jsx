import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";
import { setPlayer } from '../../helpers/functions/setPlayer';

export const TopInfo = ({data}) => {
    const dispatch = useDispatch();
    const UsersData = useSelector(state => state.userSlice);


    


    return (
        <div className="mx-0 song">
            <div className="">
                <div className="">
                    <div className="card-body little-profile p-4">
                        <div className='text-center'>
                            <div className="song">
                                <img src={data.thumbnail} alt="user" />
                            </div>
                            <h3 className="m-b-0">{data.name}</h3>
                            <p>{data.artist}</p>
                        </div>
                        <div className='containerButton--songpage'>
                            <button className="m-t-10 mx-2 waves-effect waves-dark btn btn-dark btn-svg btn-md btn-rounded containerButton--songpage__button" data-abc="true" onClick={() => setPlayer(data.tracks, dispatch, UsersData)} ><BsFillPlayFill /></button>
                            <button className="m-t-10 mx-2 waves-effect waves-dark btn btn-dark btn-svg btn-md btn-rounded containerButton--songpage__button" data-abc="true"  > <BsSuitHeartFill /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
