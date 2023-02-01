import { useDispatch, useSelector } from 'react-redux';
import { BsFillPlayCircleFill, BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import '../Card.css'
import { setPlayer } from '../../../helpers/functions/setPlayer';
import { likedAlbum } from '../../../helpers/functions/likeTrack';

const AlbumCard = ({ data, size, img }) => {
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.userSlice);
    const navigate = useNavigate();
    console.log(usersData.userLogged.liked_album)

    const openSong = (data) => {
        navigate(`/album/${data._id}`)
    }

    return (

        <div className='imgbig' >
            <div className="card-text card-body mb-2">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.artist}</p>
            </div>
            {
                usersData.isLogged ? <button className='btnheart btn' onClick={() => likedAlbum(data, usersData, dispatch)}>{
                    usersData.userLogged.liked_album.find((like) => like.id === data.id) ? <BsSuitHeartFill /> : <BsSuitHeart />
                }</button> : ""
            }
            <button className='btn btnplay' onClick={() => setPlayer(data.tracks, dispatch, usersData)}><BsFillPlayCircleFill /></button>

            <img onClick={() => openSong(data)} className={img} src={data.thumbnail} alt='img' />

        </div>

    )
}

export default AlbumCard