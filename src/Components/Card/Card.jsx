import './Card.css';
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { setPlayer } from '../../helpers/functions/setPlayer';
import { likedTrack } from '../../helpers/functions/likeTrack';


const Card = ({ data, size, img }) => {
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.userSlice);
    const navigate = useNavigate();


    const openSong = (data) => {
        navigate(`/song/${data.id}`)
    }

    return (

        <div className={size} >
            {
                usersData.isLogged ? <button className='btnheart btn' onClick={() => likedTrack(data, usersData, dispatch)}>{
                    usersData.userLogged.liked_tracks.find((like) => like.id === data.id) ? <BsSuitHeartFill /> : <BsSuitHeart />
                }</button> : ""
            }
            <button className='btn btnplay' onClick={() => setPlayer([data], dispatch, usersData)}><BsFillPlayCircleFill /></button>

            <img onClick={() => openSong(data)} className={img} src={data.thumbnail} alt='img' />

            <div className="card-text card-body">
                <h5 className="card-title mt-2">{data.name}</h5>
                <p className="card-text">{data.artist}</p>
            </div>
        </div>

    )
}

export default Card

