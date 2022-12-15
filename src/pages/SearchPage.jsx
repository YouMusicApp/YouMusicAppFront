import { useSelector } from 'react-redux';
import SearchSlider from '../Components/Slider/SearchSlider/SearchSlider';
import { breakpoints_small } from '../helpers/functions/breakpoint';


const SearchPage = ({ handleFilter, filter }) => {

    const albums = useSelector(state => state.albumSlice);
    const tracks = useSelector(state => state.trackSlice);
    const artists = useSelector(state => state.artistSlice);
    const playlists = useSelector(state => state.playlistSlice);

    const filterTracks = (tracks.list.filter((item) => {
        if (!filter) return true;
        else {
            const itemName = item.name.toLowerCase()
            return itemName.includes(filter.toLocaleLowerCase())
        }
    }))

    const filterAlbums = (albums.list.filter((item) => {
        if (!filter) return true;
        else {
            const itemName = item.name.toLowerCase()
            return itemName.includes(filter.toLocaleLowerCase())
        }
    }))

    const filterArtist = (artists.list.filter((item) => {
        if (!filter) return true;
        else {
            const itemName = item.name.toLowerCase()
            return itemName.includes(filter.toLocaleLowerCase())
        }
    }))

    const filterPlaylist = (playlists.list.filter((item) => {
        if (!filter) return true;
        else {
            const itemName = item.name.toLowerCase()
            return itemName.includes(filter.toLocaleLowerCase())
        }
    }))


    return (
        <>
            {
                filterTracks.length > 0 &&
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
            }
            {
                filterAlbums.length > 0 &&
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
            }
            {
                filterArtist.length > 0 &&
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
            }
            {
                filterPlaylist.length > 0 &&
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
            }
            {
                filterTracks.length === 0 &&
                filterAlbums.length === 0 &&
                filterArtist.length === 0 &&
                filterPlaylist.length === 0 &&
                <h4>No files found</h4>
            }
        </>
    )
}

export default SearchPage