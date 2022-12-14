import { useSelector } from "react-redux";
import AlbumSlider from "../Components/Slider/AlbumSlider/AlbumSlider";
import ArtistSlider from "../Components/Slider/ArtistSlider/ArtistSlider";
import PlaylistSlider from "../Components/Slider/PlaylistSlider/PlaylistSlider";
import Slider from "../Components/Slider/Slider"
import { TopProfile } from "../Components/TopProfile/TopProfile"

export const ProfilePage = () => {
    const userData = useSelector(state => state.userSlice);
    const likedTracks = userData.userLogged.liked_tracks;
    const likedAlbums = userData.userLogged.liked_album;
    const likedArtists = userData.userLogged.liked_artist;
    const myplaylists = userData.userLogged.myplaylists;
    const artists = useSelector(state => state.artistSlice);

    return (
        <>
            <TopProfile />
            <div className="cardContainer">
                <div className="titleCards">
                {
                    likedTracks.length > 0 &&
                    <Slider
                        slidesPerView={2}
                        spaceBetween={100}
                        size='small'
                        img='img__small'
                        array={likedTracks}
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
                }
                </div>
                <div className="titleCards">
                    {
                        likedAlbums.length > 0 &&
                            <AlbumSlider
                                slidesPerView={1}
                                size='small'
                                img='img__small'
                                array={likedAlbums}
                                title='Liked albums'
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
                    }
                </div>
                <div className="titleCards">
                    {
                        myplaylists.length > 0 &&
                        <PlaylistSlider
                        slidesPerView={2}
                        spaceBetween={100}
                        size='small'
                        img='img__small'
                        array={myplaylists}
                        title='Liked playlists'
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
                    }
                </div>
                <div className="mx-2 titleCards">
                    {
                        likedArtists.length > 0 &&
                        <ArtistSlider
                        slidesPerView={2}
                        size='small'
                        img='img__small img__small--circle'
                        array={likedArtists}
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
                    }
                </div>
            </div>
        </>
    )
}
