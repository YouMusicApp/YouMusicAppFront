import { useSelector } from "react-redux";
import Slider from "../Components/Slider/Slider"
import { TopProfile } from "../Components/TopProfile/TopProfile"

export const ProfilePage = () => {
    const userData = useSelector(state => state.userSlice);
    const likedTracks = userData.userLogged.liked_tracks;
    return (
        <>
            <TopProfile />
            <div className="container mt-2">
                <Slider
                    slidesPerView={2}
                    spaceBetween={100}
                    size='small'
                    img='img__small'
                    array={likedTracks}
                    title='Liked tracks'
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 40,
                        },
                    }}
                />
            </div>
        </>
    )
}
