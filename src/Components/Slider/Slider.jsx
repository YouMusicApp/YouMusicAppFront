import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../index.css"
import { Pagination } from "swiper";
import Card from "../Card/Card";
import { v4 as uuidv4 } from 'uuid';
import './Slider.css'


export default function Slider({ array, title, size, slidesPerView, img, breakpoints }) {
    return (
        <>
            <h2>{title}</h2>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={12}
                // pagination={{
                //     clickable: true,
                // }}
                breakpoints={breakpoints}
                modules={[Pagination]}
                className="mySwiper"
            >

                <div className="row">


                    {array.map((data) => {
                        return (
                            <SwiperSlide key={uuidv4()}>
                                <Card
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