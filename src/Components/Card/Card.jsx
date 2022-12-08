import './Card.css';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { setUserLikedTrack, setUserUnlikedTrack } from '../../redux/features/user/userSlice';
import { setTrack } from '../../redux/features/player/playerSlice';
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { fetchLikeTrack } from '../../Api/putApi';

const Card = ({ data, size, img }) => {
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.userSlice);
    const navigate = useNavigate();

    const likedTrack = (data) => {
        const prueba = usersData.userLogged.liked_tracks.find((like) => like.id === data.id)
        console.log(prueba);
        if (!prueba) {
            console.log('entro');
            const userEdited = {

                ...usersData.userLogged,
                'liked_tracks': [...usersData.userLogged.liked_tracks, data]
            }
            fetchLikeTrack(userEdited);
            dispatch(setUserLikedTrack(data));
        } else {
            console.log('segunda condicion');
                const unlikedTrack = usersData.userLogged.liked_tracks.filter((track) => {
                    return track.id !== data.id
                })
                console.log(unlikedTrack);
                const userEdited = {
                    ...usersData.userLogged,
                    'liked_tracks': unlikedTrack
                }
                console.log(userEdited);
                fetchLikeTrack(userEdited);
                dispatch(setUserUnlikedTrack(userEdited))
        }
    }

    const setPlayer = (url) => {
        usersData.isLogged ? dispatch(setTrack(url)) : console.log('Tienes que logearte para escuchar la cancion');
    }
    const openSong = (data) => {
        navigate(`/song/${data.id}`)
    }
    return (

        <div className={size} >
            {
            usersData.isLogged ? <button className='btnheart btn' onClick={() => likedTrack(data)}><AiOutlineHeart /></button> : ""
            }
            <button className='btn btnplay' onClick={() => setPlayer(data.url)}><BsFillPlayCircleFill /></button>

            <img onClick={() => openSong(data)} className={img} src={data.thumbnail} alt='img' />

            <div className="card-text imghover card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.artist}</p>
            </div>
        </div>

    )
}

export default Card

{/* <div className="">
        <a href="" class="icard">
        <img src="https://i.imgur.com/oYiTqum.jpg" class="icard__image" alt="" />
        <div class="icard__overlay">
            <div class="icard__header">
                <svg class="icard__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                <img class="icard__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                <div class="icard__header-text">
                <h3 class="icard__title">Jessica Parker</h3>
                <span class="icard__status">1 hour ago</span>
            </div>
            </div>
            <p class="icard__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        </div>
        </a>
      </div> */}