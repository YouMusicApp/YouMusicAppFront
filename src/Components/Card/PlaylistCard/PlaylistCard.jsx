import { useDispatch, useSelector } from 'react-redux';
import { setUserLikedPlaylist, setUserUnlikedPlaylist } from '../../../redux/features/user/userSlice';
import { BsFillPlayCircleFill, BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { fetchLikePlaylist } from '../../../Api/putApi';
import '../Card.css'
import { setPlayer } from '../../../helpers/functions/setPlayer';

const PlaylistCard = ({ data, size, img }) => {
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.userSlice);
    const navigate = useNavigate();

    const openSong = (data) => {
        navigate(`/playlist/${data.id}`)
    }

    const likedPlaylist = (data) => {
        const checkLiked = usersData.userLogged.myplaylists.find((like) => like.id === data.id);

        if (!checkLiked) {
            const userEdited = {
                ...usersData.userLogged,
                'myplaylists': [...usersData.userLogged.myplaylists, data]
            }

            dispatch(setUserLikedPlaylist(data));
            fetchLikePlaylist(userEdited);
        } else {
            const unlikedPlaylist = usersData.userLogged.myplaylists.filter((playlist) => playlist.id !== data.id)
            const userEdited = {
                ...usersData.userLogged,
                'myplaylists': unlikedPlaylist
            }
            dispatch(setUserUnlikedPlaylist(userEdited))
            fetchLikePlaylist(userEdited);
        }
    }

    return (

        <div className='small'>
            {
                usersData.isLogged ? <button className='btnheart btn' onClick={() => likedPlaylist(data)}>{
                    usersData.userLogged.myplaylists.find((like) => like.id === data.id) ? <BsSuitHeartFill /> : <BsSuitHeart />
                }</button> : ""
            }
            <button className='btn btnplay' onClick={() => setPlayer(data.tracks, dispatch, usersData)}><BsFillPlayCircleFill /></button>

            <img onClick={() => openSong(data)} className={img} src={data.thumbnail} alt='img' />

            <div className="card-text imghover card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.artist}</p>
            </div>
        </div>

    )
}

export default PlaylistCard