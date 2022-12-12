import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { v4 as uuidv4 } from 'uuid';
import '../Slider.css'
import ArtistCard from "../../Card/ArtistCard/ArtistCard";

export default function ArtistSlider({ array, title, size, slidesPerView, img, breakpoints }) {
    return (
        <>
            <h2>{title}</h2>
            <Swiper
                slidesPerView={slidesPerView}
                breakpoints={breakpoints}
                modules={[Pagination]}
                className="mySwiper"
            >
                <div className="row">
                    {array.map((data) => {
                        return (
                            <SwiperSlide key={uuidv4()}>
                                <ArtistCard
                                    data={data}
                                    size={size}
                                    img={img}
                                    slidesPerView={slidesPerView}
                                    breakpoints={breakpoints}
                                />
                            </SwiperSlide>
                        )
                    })}
                </div>
            </Swiper>
        </>
    );
}