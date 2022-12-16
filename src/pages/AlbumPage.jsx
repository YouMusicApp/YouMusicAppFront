import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TopInfo } from '../Components/TopInfo/TopInfo';
import Slider from '../Components/Slider/Slider';
import { TableSongs } from '../Components/TableSongs/TableSongs';
import { breakpoints_small } from '../helpers/functions/breakpoint';
import AlbumSlider from '../Components/Slider/AlbumSlider/AlbumSlider';

export const AlbumPage = () => {
    const { id } = useParams();
    const albums = useSelector(state => state.albumSlice.list);
    const album = albums.find((element) => element.id === parseInt(id));
    const tracks = useSelector(state => state.trackSlice);

    return (
        <>

            <TopInfo data={album} />
            <TableSongs songList={album.tracks} />

            <div>
                <AlbumSlider
                    slidesPerView={2}
                    size='small'
                    img='img__small'
                    array={albums}
                    title='Artist albums'
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
            <div className="titleCards cardContainer">
                <Slider
                    slidesPerView={1}
                    size='small'
                    img='img__small'
                    array={tracks.list}
                    title='Tracks'
                    breakpoints={breakpoints_small}
                />
            </div>
        </>
    )
}
