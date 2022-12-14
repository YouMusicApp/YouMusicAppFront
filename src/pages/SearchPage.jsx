import { useSelector } from 'react-redux';
import SearchSlider from '../Components/Slider/SearchSlider/SearchSlider';
import { breakpoints_small } from '../helpers/functions/breakpoint';


const SearchPage = ({ handleFilter, filter }) => {

    const albums = useSelector(state => state.albumSlice);
    const tracks = useSelector(state => state.trackSlice);
    const artists = useSelector(state => state.artistSlice);
    const playlists = useSelector(state => state.playlistSlice);

    console.log(tracks.list);
    console.log(filter);
    return (
        <>
            <div className="mx-2 titleCards">
                <SearchSlider
                    slidesPerView={1}
                    size='small'
                    img='img__small'
                    array={tracks.list}
                    title='Tracks'
                    breakpoints={breakpoints_small}
                    handleFilter={handleFilter}
                    filter={filter}
                />
            </div>

            <div className="mx-2 titleCards">
                <SearchSlider
                    slidesPerView={1}
                    size='small'
                    img='img__small'
                    array={albums.list}
                    title='Albums'
                    breakpoints={breakpoints_small}
                    handleFilter={handleFilter}
                    filter={filter}
                />
            </div>

            <div className="mx-2 titleCards">
                <SearchSlider
                    slidesPerView={1}
                    size='small'
                    img='img__small'
                    array={artists.list}
                    title='Artist'
                    breakpoints={breakpoints_small}
                    handleFilter={handleFilter}
                    filter={filter}
                />
            </div>
            <div className="mx-2 titleCards">
                <SearchSlider
                    slidesPerView={1}
                    size='small'
                    img='img__small'
                    array={playlists.list}
                    title='Playlists'
                    breakpoints={breakpoints_small}
                    handleFilter={handleFilter}
                    filter={filter}
                />
            </div>
        </>
    )
}

export default SearchPage