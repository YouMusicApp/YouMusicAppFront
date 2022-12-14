import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../../index.css"
import { Pagination } from "swiper";
import { v4 as uuidv4 } from 'uuid';
import '../Slider.css'
import Card from "../../Card/Card";
import Search from "../../Search/Search";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";



export default function SearchSlider({ array, title, size, slidesPerView, img, breakpoints, filter }) {


    return (
        <>
                <h2>{title}</h2>

            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={12}
                breakpoints={breakpoints}
                modules={[Pagination]}
                className="mySwiper"
            >

                <div className="row">

                    {array.filter((items) => {
                        if (!filter) return true;
                        else {
                            const itemName = items.name.toLowerCase()
                            return itemName.includes(filter.toLocaleLowerCase())
                        }
                    })
                        .map((data) => {
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