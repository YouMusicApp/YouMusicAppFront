import { useSelector } from "react-redux"
import AlbumSlider from "../Components/Slider/AlbumSlider/AlbumSlider";
import PlaylistSlider from "../Components/Slider/PlaylistSlider/PlaylistSlider";
import Slider from "../Components/Slider/Slider"
import { breakpoints_album, breakpoints_small } from "../helpers/functions/breakpoint";

const HomePage = () => {
  const albums = useSelector(state => state.albumSlice);
  const tracks = useSelector(state => state.trackSlice);
  const userData = useSelector(state => state.userSlice);
  const playlists = useSelector(state => state.playlistSlice);

  let likeTracks = [];
  if (userData.isLogged) {
    likeTracks = userData.userLogged.liked_tracks;
  }

console.log(playlists.list)

  return (
    <div className="cardContainer">
      {
        userData.isLogged ?
          <div className="mx-2 titleCards">
            <Slider
              slidesPerView={1}
              spaceBetween={100}
              size='small'
              img='img__small'
              array={likeTracks}
              title='Liked tracks'
              breakpoints={breakpoints_small}
            />
          </div>
          : ''
      }

      <div className="mx-2 titleCards">
        <AlbumSlider
          slidesPerView={1}
          size='big'
          img='img__big'
          array={albums.list}
          title='Albums'
          breakpoints={breakpoints_album}
        />
      </div>

      <div className="mx-2 titleCards">
        <Slider
          slidesPerView={1}
          size='small'
          img='img__small'
          array={tracks.list}
          title='Tracks'
          breakpoints={breakpoints_small}
        />
      </div>

      <div className="mx-2 titleCards">
        <PlaylistSlider
          slidesPerView={1}
          size='small'
          img='img__small'
          array={playlists.list}
          title='Playlists'
          breakpoints={breakpoints_small}
        />
      </div>





    </div>

  )
}

export default HomePage