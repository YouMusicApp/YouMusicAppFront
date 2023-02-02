import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { v4 as uuidv4 } from 'uuid';
import '../Slider.css'
import AlbumCard from "../../Card/AlbumCard/AlbumCard";


export default function AlbumSlider({ array, title, size, slidesPerView, img, breakpoints }) {

    return (
        <>
            <h2 className="cardContainer">{title}</h2>
            <Swiper
                slidesPerView={slidesPerView}
                // pagination={{
                //     clickable: true,
                // }}
                breakpoints={breakpoints}
                modules={[Pagination]}
                className="mySwiper cardContainer"
            >

                <div className="row">


                    {array.map((data) => {
                        return (
                            <SwiperSlide
                                key={uuidv4()}
                                className='bigSlide' >
                                <AlbumCard
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