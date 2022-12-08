import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { setUserLikedTrack } from '../../../redux/features/user/userSlice';
import { setTrack } from '../../../redux/features/player/playerSlice';
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { fetchLikeTrack } from '../../../Api/putApi';

const AlbumCard = ({ data, size, img }) => {
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.userSlice);
    const navigate = useNavigate();
    
    const likedTrack = (data) => {
        const userEdited = {
            ...usersData.userLogged,
            'liked_tracks': [...usersData.userLogged.liked_tracks, data]
        }
        fetchLikeTrack(userEdited);
        dispatch(setUserLikedTrack(data));
    }

    const setPlayer = (listSong) => {
        usersData.isLogged ? dispatch(setTrack(listSong)) : console.log('Tienes que logearte para escuchar la cancion');
    }
    const openSong = (data) => {
        navigate(`/album/${data.id}`)
    }
    return (

        <div className='' >
            {usersData.isLogged ? <button className='btnheart btn' onClick={() => likedTrack(data)}><AiOutlineHeart /></button> : ""}
            <button className='btn btnplay' onClick={() => setPlayer(data.tracks)}><BsFillPlayCircleFill /></button>

            <img onClick={() => openSong(data)} className={img} src={data.thumbnail} alt='img' />

            <div className="card-text imghover card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.artist}</p>
            </div>
        </div>

    )
}

export default AlbumCard