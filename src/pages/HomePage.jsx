import { useSelector } from "react-redux"
import AlbumSlider from "../Components/Slider/AlbumSlider/AlbumSlider";
import ArtistSlider from "../Components/Slider/ArtistSlider/ArtistSlider";
import Slider from "../Components/Slider/Slider"

const HomePage = () => {
  const albums = useSelector(state => state.albumSlice);
  const tracks = useSelector(state => state.trackSlice);
  const artists = useSelector(state => state.artistSlice);
  const userData = useSelector(state => state.userSlice);

  let likeTracks = [];
  if (userData.isLogged) {
    likeTracks = userData.userLogged.liked_tracks;
  }

  return (
    <div className="cardContainer">
        {
          userData.isLogged ?
            <div className="mx-2 titleCards">
              <Slider
                slidesPerView={2}
                spaceBetween={100}
                size='small'
                img='img__small'
                array={likeTracks}
                title='Liked tracks'
                breakpoints={{
                    600: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    992: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    1200: {
                        slidesPerView: 7,
                        spaceBetween: 10,
                    },
                    1400: {
                        slidesPerView: 8,
                        spaceBetween: 10,
                    }
                }}
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
          breakpoints={{
            600: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 10,
            }
          }}
        />
      </div>

      <div className="mx-2 titleCards">
        <Slider
          slidesPerView={2}
          size='small'
          img='img__small'
          array={tracks.list}
          title='Tracks'
          breakpoints={{
            600: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 7,
              spaceBetween: 10,
            },
            1400: {
              slidesPerView: 8,
              spaceBetween: 10,
            }
          }}
        />
      </div>

      <div className="mx-2 titleCards">
        <ArtistSlider
          slidesPerView={2}
          size='small'
          img='img__small img__small--circle'
          array={artists.list}
          title='Artist'
          breakpoints={{
            600: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 7,
              spaceBetween: 10,
            },
            1400: {
              slidesPerView: 8,
              spaceBetween: 10,
            }
          }}
        />
      </div>
    </div>
  )
}

export default HomePage