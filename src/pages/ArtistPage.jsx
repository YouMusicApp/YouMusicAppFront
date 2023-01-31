import { BsFillPlayFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AlbumSlider from '../Components/Slider/AlbumSlider/AlbumSlider';
import Slider from '../Components/Slider/Slider';
import { TopInfoArtist } from '../Components/TopInfo/TopInfoArtist/TopInfoArtist';
import { v4 as uuidv4 } from 'uuid';
import { TableSongs } from '../Components/TableSongs/TableSongs';

export const ArtistPage = () => {
    const { _id } = useParams();
    const artists = useSelector(state => state.artistSlice);
    const artist = artists.list.find((element) => element._id === _id);
    const tracks = useSelector(state => state.trackSlice);
    const tracksArtist = tracks.list.filter((track) => track.artist === artist.name);
    const albums = useSelector(state => state.albumSlice);
    const album = albums.list.filter((album) => album.artist === artist.name);

    let listGenreArtist = [];
    artist.genres.map((genre) => listGenreArtist = [...listGenreArtist, tracks.list.filter((track) => track.genre === genre)]);
    const similarSongs = listGenreArtist.flat()

    return (
        <>
            <TopInfoArtist data={artist} />

            <TableSongs songList={tracksArtist} />
            
            {/* <div className='titleCards cardContainer'>
                <div>
                    <AlbumSlider
                        slidesPerView={2}
                        size='small'
                        img='img__small'
                        array={album}
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
                    /> */}
                {/* </div>
                {similarSongs.length > 0 &&
                    <div className="mt-2">
                        <Slider
                            slidesPerView={2}
                            size='small'
                            img='img__small'
                            array={similarSongs}
                            title='Similar songs'
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
                }
                {
                    listGenreArtist.map((e) => {
                        if (e.length > 0) {
                            const capitalizeGenre = e[0].genre.charAt(0).toUpperCase() + e[0].genre.slice(1);

                            return (
                                <div key={uuidv4()} className="mt-2">
                                    <Slider
                                        slidesPerView={2}
                                        size='small'
                                        img='img__small'
                                        array={e}
                                        title={capitalizeGenre}
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
                                </div> */}
                            )
                        }

                    })
                }
            {/* </div> */}
        </>
    )
}