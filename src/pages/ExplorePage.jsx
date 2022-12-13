import { v4 as uuidv4 } from 'uuid';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArtistSlider from '../Components/Slider/ArtistSlider/ArtistSlider';

export const ExplorePage = () => {
    const navigate = useNavigate();
    const genres = useSelector(state => state.genresSlice.list);
    const artists = useSelector(state => state.artistSlice);

    return (
        <div className="mx-2">
            <div className="mx-4">
                <h2>Genres</h2>
                <div className="containerB row">

                    {
                        genres.map(e => {
                            return (
                                <div key={uuidv4()} onClick={() => navigate(`/explore/${e.name}`)} className="bg-light cursor-pointer bg-light.bg-gradient border rounded me-2 mt-2 col p-3 grid-center">{e.name}</div>
                            )
                        })
                    }
                </div>

            </div >

            <div className="mx-2 mt-3 titleCards">
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
        </div >
    )
}
