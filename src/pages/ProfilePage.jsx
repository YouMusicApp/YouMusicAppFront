import { useSelector } from "react-redux";
import AlbumSlider from "../Components/Slider/AlbumSlider/AlbumSlider";
import Slider from "../Components/Slider/Slider"
import { TopProfile } from "../Components/TopProfile/TopProfile"

export const ProfilePage = () => {
    const userData = useSelector(state => state.userSlice);
    const likedTracks = userData.userLogged.liked_tracks;
    const likedAlbums = userData.userLogged.liked_album;
    
    return (
        <>
            <TopProfile />
            <div className="mx-2 mt-2">
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
                <div className="titleCards">
                    <AlbumSlider
                        slidesPerView={1}
                        size='big'
                        img='img__big'
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
                </div>
            </div>
        </>
    )
}
