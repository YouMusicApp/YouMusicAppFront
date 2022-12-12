import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TopInfo } from '../Components/TopInfo/TopInfo';
import { setPlayer } from '../helpers/functions/setPlayer';
import { v4 as uuidv4 } from 'uuid';
import Slider from '../Components/Slider/Slider';

export const AlbumPage = () => {
    const { id } = useParams();
    const albums = useSelector(state => state.albumSlice.list);
    const album = albums.find((element) => element.id === parseInt(id));
    const tracks = useSelector(state => state.trackSlice);


    return (
        <>

            <TopInfo data={album} />
            <div className='mx-2 mb-4'>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Title</th>
                            <th scope="col">Artist</th>
                            <th scope="col">Genre</th>
                        </tr>
                    </thead>
                    {album.tracks.map((data) => {
                        return (
                            <tbody key={uuidv4()}>
                                <tr className='cursor-pointer'>
                                    <td onClick={() => setPlayer(data)} className='cursor-pointer tdhover'><BsFillPlayFill /></td>
                                    <td>{data.name}</td>
                                    <td>{data.artist}</td>
                                    <td>{data.genre}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
                <div className="mx-2 titleCards">
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
        </>
    )
}
