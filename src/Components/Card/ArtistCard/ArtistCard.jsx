import { useDispatch, useSelector } from 'react-redux';
import { BsFillPlayCircleFill, BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import '../Card.css'
import { setPlayer } from '../../../helpers/functions/setPlayer';
import { likedArtist } from '../../../helpers/functions/likeTrack';
import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ArtistCard = ({ data, size, img }) => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userSlice);
    const navigate = useNavigate();

    const tracks = useSelector(state => state.trackSlice);
    const tracksArtist = tracks.list.filter((track) => track.artist === data.name);

    const openSong = (data) => {
        navigate(`/artist/${data._id}`)
    }

    const [myToken, setMyToken] = useState("")
    const { getAccessTokenSilently } = useAuth0()

    useEffect(() => {
        async function getToken() {
            const token = await getAccessTokenSilently();
            setMyToken(prev => prev = token);
        }
        getToken();
    }, [getAccessTokenSilently])

    return (

        <div className={size} >
            {
                userData.isLogged ? <button className='btnheart btn' onClick={() => likedArtist(data, userData, myToken, dispatch)}>{
                    userData.userLogged.liked_artist.find((like) => like.id === data.id) ? <BsSuitHeartFill /> : <BsSuitHeart />
                }</button> : ""
            }
            <button className='btn btnplay' onClick={() => setPlayer(tracksArtist, dispatch, userData)}><BsFillPlayCircleFill /></button>

            <img onClick={() => openSong(data)} className={img} src={data.thumbnail} alt={data.artist} />

            <div className="card-text imghover card-body">
                <h5 className="card-title mt-2 grid-center">{data.name}</h5>
            </div>
        </div>

    )
}

export default ArtistCard