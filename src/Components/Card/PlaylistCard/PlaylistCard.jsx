import { useDispatch, useSelector } from 'react-redux';
import { BsFillPlayCircleFill, BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import '../Card.css'
import { setPlayer } from '../../../helpers/functions/setPlayer';
import { likedPlaylist } from '../../../helpers/functions/likeTrack';

const PlaylistCard = ({ data, size, img }) => {
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.userSlice);
    const navigate = useNavigate();

    const openSong = (data) => {
        navigate(`/playlist/${data.id}`)
    }

    return (

        <div className='small'>
            {
                usersData.isLogged ? <button className='btnheart btn' onClick={() => likedPlaylist(data, usersData, dispatch)}>{
                    usersData.userLogged.myplaylists.find((like) => like.id === data.id) ? <BsSuitHeartFill /> : <BsSuitHeart />
                }</button> : ""
            }
            <button className='btn btnplay' onClick={() => setPlayer(data.tracks, dispatch, usersData)}><BsFillPlayCircleFill /></button>

            <img onClick={() => openSong(data)} className={img} src={data.thumbnail} alt='img' />

            <div className="card-text imghover card-body mt-2">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.artist}</p>
            </div>
        </div>

    )
}

export default PlaylistCard