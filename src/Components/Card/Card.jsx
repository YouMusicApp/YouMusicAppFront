import './Card.css';
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { setPlayer } from '../../helpers/functions/setPlayer';
import { likedTrack } from '../../helpers/functions/likeTrack';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';


const Card = ({ data, size, img }) => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userSlice);
    const navigate = useNavigate();

    const [myToken, setMyToken] = useState("")

    const { getAccessTokenSilently } = useAuth0()

    useEffect(() => {
        async function getToken() {
            const token = await getAccessTokenSilently();
            setMyToken(prev => prev = token);
        }
        getToken();
    }, [getAccessTokenSilently])



    const openSong = (data) => {
        navigate(`/track/${data._id}`)
        console.log(data)

    }

    return (

        <div className={size} >
            {
                userData.isLogged ? <button className='btnheart btn' onClick={() => likedTrack(data, userData, myToken, dispatch)}>{
                    userData.userLogged.liked_tracks.find((like) => like._id === data._id) ? <BsSuitHeartFill /> : <BsSuitHeart />
                }</button> : ""
            }
            <button className='btn btnplay' onClick={() => setPlayer([data], dispatch, userData)}><BsFillPlayCircleFill /></button>

            <img onClick={() => openSong(data)} className={img} src={data.thumbnail} alt='img' />

            <div className="card-text card-body">
                <h5 className="card-title mt-2">{data.name}</h5>
                <p className="card-text">{data.artist}</p>
            </div>
        </div>

    )
}

export default Card

