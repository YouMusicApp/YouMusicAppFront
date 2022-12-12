import { useDispatch, useSelector } from 'react-redux';
import { setUserLikedArtist, setUserUnlikedArtist } from '../../../redux/features/user/userSlice';
import { setTrack } from '../../../redux/features/player/playerSlice';
import { BsFillPlayCircleFill, BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { fetchLikeArtist } from '../../../Api/putApi';
import '../Card.css'

const ArtistCard = ({ data, size, img }) => {
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.userSlice);
    const navigate = useNavigate();

    const setPlayer = (listSong) => {
        usersData.isLogged ? dispatch(setTrack(listSong)) : console.log('Tienes que logearte para escuchar la cancion');
    }
    const openSong = (data) => {
        navigate(`/artist/${data.id}`)
    }

    const likedArtist = (data) => {
        const checkLiked = usersData.userLogged.liked_artist.find((like) => like.id === data.id);

        if (!checkLiked) {
            console.log('like');
            const userEdited = {
                ...usersData.userLogged,
                'liked_artist': [...usersData.userLogged.liked_artist, data]
            }
            fetchLikeArtist(userEdited);
            dispatch(setUserLikedArtist(data));
        } else {
            console.log('dislike');
            const unlikedArtist = usersData.userLogged.liked_artist.filter((artist) => {
                return artist.id !== data.id
            })
            const userEdited = {
                ...usersData.userLogged,
                'liked_artist': unlikedArtist
            }
            fetchLikeArtist(userEdited);
            dispatch(setUserUnlikedArtist(userEdited))
        }
    }

    return (

        <div className={size} >
            {
                usersData.isLogged ? <button className='btnheart btn' onClick={() => likedArtist(data)}>{
                    usersData.userLogged.liked_artist.find((like) => like.id === data.id) ? <BsSuitHeartFill /> : <BsSuitHeart />
                }</button> : ""
            }
            <button className='btn btnplay' onClick={() => setPlayer(data.tracks)}><BsFillPlayCircleFill /></button>

            <img onClick={() => openSong(data)} className={img} src={data.photoUrl} alt={data.artist} />

            <div className="card-text imghover card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.artist}</p>
            </div>
        </div>

    )
}

export default ArtistCard