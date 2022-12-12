import { useDispatch, useSelector } from 'react-redux';
import { setUserLikedAlbum, setUserLikedPlaylist, setUserUnlikedAlbum } from '../../../redux/features/user/userSlice';
import { setTrack } from '../../../redux/features/player/playerSlice';
import { BsFillPlayCircleFill, BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { fetchLikePlaylist } from '../../../Api/putApi';
import '../Card.css'

const PlaylistCard = ({ data, size, img }) => {
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.userSlice);
    const navigate = useNavigate();

    const setPlayer = (listSong) => {
        usersData.isLogged ? dispatch(setTrack(listSong)) : console.log('Tienes que logearte para escuchar la cancion');
    }
    const openSong = (data) => {
        navigate(`/playlist/${data.id}`)
    }

    const likedPlaylist = (data) => {
        const checkLiked = usersData.userLogged.myplaylists.find((like) => like.id === data.id);
       

        if (!checkLiked) {
            console.log("hola")
            const userEdited = {
                ...usersData.userLogged,
                'myplaylists': [...usersData.userLogged.myplaylists, data]
            }
            fetchLikePlaylist(userEdited);
            dispatch(setUserLikedPlaylist(data));
        } else {
            console.log("hola2")
            const unlikedPlaylist = usersData.userLogged.myplaylists.filter((playlist) => {
                return playlist.id !== data.id
            })
            const userEdited = {
                ...usersData.userLogged,
                'myplaylists': unlikedPlaylist
            }
            fetchLikePlaylist(userEdited);
            dispatch(setUserLikedPlaylist(userEdited))
        }
    }

    return (

        <div className='imgbig' >
            {
                usersData.isLogged ? <button className='btnheart btn' onClick={() => likedPlaylist(data)}>{
                    usersData.userLogged.myplaylists.find((like) => like.id === data.id) ? <BsSuitHeartFill /> : <BsSuitHeart />
                }</button> : ""
            }
            <button className='btn btnplay' onClick={() => setPlayer(data.tracks)}><BsFillPlayCircleFill /></button>

            <img onClick={() => openSong(data)} className={img} src={data.thumbnail} alt='img' />

            <div className="card-text imghover card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.artist}</p>
            </div>
        </div>

    )
}

export default PlaylistCard