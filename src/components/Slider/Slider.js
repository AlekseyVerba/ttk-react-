import React from "react"
import "./slider.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
SwiperCore.use([Navigation, Pagination]);

const Slider = ({items}) => {

    const itemsSlide = items.map(item => {
        const {slide_text,slide_img,url_in_button} = item
        return (
            <SwiperSlide key={slide_text}>
                <div className="slider-main__slide">
                    <div className="slider-main__wrapper">
                        <img className="slider-main__img" src={slide_img} />
                        <h2 className="slider-main__title ">{slide_text}</h2>
                        <a className="slider-main__link btn btn--order" href={url_in_button}>Подробнее</a>
                    </div>
                </div>
            </SwiperSlide>
        )
    })

    return(
        <div className="slider-main">
            <div className="container">
                <div className="sldier-main__inner">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    loop={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                        {itemsSlide}
                </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Slider