import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TopInfo } from '../Components/TopInfo/TopInfo';
import Slider from '../Components/Slider/Slider';
import { TableSongs } from '../Components/TableSongs/TableSongs';

export const AlbumPage = () => {
    const { id } = useParams();
    const albums = useSelector(state => state.albumSlice.list);
    const album = albums.find((element) => element.id === parseInt(id));
    const tracks = useSelector(state => state.trackSlice);

    return (
        <>

            <TopInfo data={album} />
                <TableSongs songList={album.tracks} />
                <div className="titleCards cardContainer">
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
        </>
    )
}
