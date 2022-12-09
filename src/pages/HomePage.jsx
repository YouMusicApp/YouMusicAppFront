import { useSelector } from "react-redux"
import AlbumSlider from "../Components/Slider/AlbumSlider/AlbumSlider";
import Slider from "../Components/Slider/Slider"

const HomePage = () => {
  const albums = useSelector(state => state.albumSlice);
  const tracks = useSelector(state => state.trackSlice);

  return (
    <div className="mx-2 mt-2">
      <div className="">
        <AlbumSlider
          slidesPerView={1}
          size='big'
          img='img__big'
          array={albums}
          title='Albums'
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        />
      </div>
      <div>
        <Slider
          slidesPerView={1}
          size='small'
          img='img__small'
          array={tracks.list}
          title='Tracks'
          breakpoints={{
            325: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            800: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1035: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1240: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1450: {
              slidesPerView: 7,
              spaceBetween: 10,
            },
            1635: {
              slidesPerView: 8,
              spaceBetween: 10,
            },
            1825: {
              slidesPerView: 9,
              spaceBetween: 10,
            }
          }}
        />
      </div>
    </div>

  )
}

export default HomePage