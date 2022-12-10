import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { v4 as uuidv4 } from 'uuid';
import '../Slider.css'
import PlaylistCard from "../../Card/PlaylistCard/PlaylistCard";

export default function PlaylistSlider({ array, title, size, slidesPerView, img, breakpoints }) {


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
                            <SwiperSlide
                                key={uuidv4()}
                                className='bigSlide' >
                                <PlaylistCard
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

