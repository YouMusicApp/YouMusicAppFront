import React from 'react'
import { useSelector } from 'react-redux';
import Slider from '../Components/Slider/Slider';
import { breakpoints_small } from '../helpers/functions/breakpoint';
import { v4 as uuidv4 } from 'uuid';

const SearchPage = ({ handleFilter, filter }) => {
    //const albums = useSelector(state => state.albumSlice);
    const tracks = useSelector(state => state.trackSlice);
    //const userData = useSelector(state => state.userSlice);
    //const playlists = useSelector(state => state.playlistSlice);
    //console.log(albums); // NECESITAMOS NOMBRE DE ALBUM
    //console.log(userData); // NECESITAMOS USERNAME, INFO PROFILE
    //console.log(playlists); // NECESITAMOS NOMBRE DE LAS PLAYLISTS
    console.log(filter);

    return (
        <>
            {filter !== undefined ? tracks.list.filter((song) => {

                const songName = song.name.toLowerCase();
                return songName.includes(filter.toLowerCase());

            }).map((track) => {
                return (
                    <div key={uuidv4()} className='mx-2 mt-2'>
                        <Slider
                            slidesPerView={1}
                            size='small'
                            img='img__small'
                            array={[track]}
                            title='Tracks'
                            breakpoints={breakpoints_small}
                        />
                    </div>
                )
            }) : 'Hola'}
        </>
    )
}

export default SearchPage