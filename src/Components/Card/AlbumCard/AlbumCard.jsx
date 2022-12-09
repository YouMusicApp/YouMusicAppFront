import { useDispatch, useSelector } from 'react-redux';
import { setUserLikedAlbum, setUserUnlikedAlbum } from '../../../redux/features/user/userSlice';
import { setTrack } from '../../../redux/features/player/playerSlice';
import { BsFillPlayCircleFill, BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { fetchLikeAlbum } from '../../../Api/putApi';
import '../Card.css'

const AlbumCard = ({ data, size, img }) => {
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.userSlice);
    const navigate = useNavigate();

    const setPlayer = (listSong) => {
        usersData.isLogged ? dispatch(setTrack(listSong)) : console.log('Tienes que logearte para escuchar la cancion');
    }
    const openSong = (data) => {
        navigate(`/album/${data.id}`)
    }

    const likedAlbum = (data) => {
        const checkLiked = usersData.userLogged.liked_album.find((like) => like.id === data.id);
        console.log(usersData.userLogged.liked_album);
        console.log(checkLiked);
        if (!checkLiked) {
            console.log('like');
            const userEdited = {
                ...usersData.userLogged,
                'liked_album': [...usersData.userLogged.liked_album, data]
            }
            fetchLikeAlbum(userEdited);
            dispatch(setUserLikedAlbum(data));
        } else {
            console.log('dislike');
            const unlikedAlbum = usersData.userLogged.liked_album.filter((album) => {
                return album.id !== data.id
            })
            const userEdited = {
                ...usersData.userLogged,
                'liked_album': unlikedAlbum
            }
            fetchLikeAlbum(userEdited);
            dispatch(setUserUnlikedAlbum(userEdited))
        }
    }

    return (

        <div className='imgbig' >
            {
                usersData.isLogged ? <button className='btnheart btn' onClick={() => likedAlbum(data)}>{
                    usersData.userLogged.liked_album.find((like) => like.id === data.id) ? <BsSuitHeartFill /> : <BsSuitHeart />
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

export default AlbumCard