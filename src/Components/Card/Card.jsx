import './Card.css';
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { setUserLikedTrack, setUserUnlikedTrack } from '../../redux/features/user/userSlice';
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { fetchLikeTrack } from '../../Api/putApi';
import { setPlayer } from '../../helpers/functions/setPlayer';

const Card = ({ data, size, img }) => {
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.userSlice);
    const navigate = useNavigate();

    const likedTrack = (data) => {
        const checkLiked = usersData.userLogged.liked_tracks.find((like) => like.id === data.id)
        if (!checkLiked) {
            console.log('if is true');
            const userEdited = {

                ...usersData.userLogged,
                'liked_tracks': [...usersData.userLogged.liked_tracks, data]
            }
            fetchLikeTrack(userEdited);
            dispatch(setUserLikedTrack(data));
        } else {
            console.log('if is false');
            const unlikedTrack = usersData.userLogged.liked_tracks.filter((track) => {
                return track.id !== data.id
            })
            const userEdited = {
                ...usersData.userLogged,
                'liked_tracks': unlikedTrack
            }
            fetchLikeTrack(userEdited);
            dispatch(setUserUnlikedTrack(userEdited))
        }
    }

    const openSong = (data) => {
        navigate(`/song/${data.id}`)
    }
    /* const heartToggle = () => {
        const filter = usersData.userLogged.liked_tracks.find((like) => like.id === data.id)
        if (filter) {
            return (
                <AiOutlineHeart />
            )
        } else {
            return (
                <AiFillHeart />
            )
        }
    } */

    return (

        <div className={size} >
            {
                usersData.isLogged ? <button className='btnheart btn' onClick={() => likedTrack(data)}>{
                    usersData.userLogged.liked_tracks.find((like) => like.id === data.id) ? <BsSuitHeartFill /> : <BsSuitHeart />
                }</button> : ""
            }
            <button className='btn btnplay' onClick={() => setPlayer([data], dispatch, usersData)}><BsFillPlayCircleFill /></button>

            <img onClick={() => openSong(data)} className={img} src={data.thumbnail} alt='img' />

            <div className="card-text imghover card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.artist}</p>
            </div>
        </div>

    )
}

export default Card

