import { useDispatch, useSelector } from 'react-redux';
import { fetchLikeTrack } from '../../Api/ApiPut';
import { setUserLikedTrack } from '../../redux/features/user/userSlice';
import { setTrack } from '../../redux/features/player/playerSlice';
import './Card.css';
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Card = ({ data, size, img }) => {
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

    const setPlayer = (url) => {
        usersData.isLogged ? dispatch(setTrack(url)) : console.log('Tienes que logearte para escuchar la cancion');
    }
    const openSong = (data) => {
        navigate(`song/${data.id}`)
    }
    return (

        <div className={size} >
            {usersData.isLogged ? <button className='btnheart btn' onClick={() => likedTrack(data)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
                <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
            </svg></button> : ""}
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