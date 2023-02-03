import { useDispatch, useSelector } from 'react-redux';
import { BsFillPlayCircleFill, BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import '../Card.css'
import { setPlayer } from '../../../helpers/functions/setPlayer';
import { likedAlbum } from '../../../helpers/functions/likeTrack';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';

const AlbumCard = ({ data, size, img }) => {
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
        navigate(`/album/${data._id}`)
    }

    return (

        <div className='imgbig' >
           
            {
                userData.isLogged ? <button className='btnheart btn' onClick={() => likedAlbum(data, userData, myToken, dispatch)}>{
                    userData.userLogged.liked_album.find((like) => like.id === data.id) ? <BsSuitHeartFill /> : <BsSuitHeart />
                }</button> : ""
            }
            
            <button className='btn btnplay' onClick={() => setPlayer(data.tracks, dispatch, userData)}><BsFillPlayCircleFill /></button>

            <img onClick={() => openSong(data)} className={img} src={data.thumbnail} alt='img' />
            <div className="card-text card-body mb-2 mt-2">
                <h5 className="card-title ">{data.name}</h5>
                <p className="card-text">{data.artist}</p>
            </div>
        </div>

    )
}

export default AlbumCard