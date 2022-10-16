import React from 'react';
import styles from './Find.module.css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import Card from './Card';

const Find = () => {
  return (
    <div className={styles.find}>

        <div className={styles.heading}>
            <h1>Find your drive</h1>
            <div className={styles.text_bg}>
                <p>
                    <span>Explore the world's largest car sharing marketplace</span>
                </p>
            </div>
        </div>

        <div className={styles.slider_container}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={5}
                navigation
                breakpoints={{
                    340: {
                        width: 200,
                        slidesPerView: 1,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 4,
                    },
                    1040: {
                        width: 1040,
                        slidesPerView: 5,
                    },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <Card image='https://images.pexels.com/photos/10566898/pexels-photo-10566898.jpeg?auto=compress&cs=tinysrgb&w=600' make='Audi'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://images.pexels.com/photos/10566898/pexels-photo-10566898.jpeg?auto=compress&cs=tinysrgb&w=600' make='Audi'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://images.pexels.com/photos/10566898/pexels-photo-10566898.jpeg?auto=compress&cs=tinysrgb&w=600' make='Audi'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://images.pexels.com/photos/10566898/pexels-photo-10566898.jpeg?auto=compress&cs=tinysrgb&w=600' make='Audi'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://images.pexels.com/photos/10566898/pexels-photo-10566898.jpeg?auto=compress&cs=tinysrgb&w=600' make='Audi'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://images.pexels.com/photos/10566898/pexels-photo-10566898.jpeg?auto=compress&cs=tinysrgb&w=600' make='Audi'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://images.pexels.com/photos/10566898/pexels-photo-10566898.jpeg?auto=compress&cs=tinysrgb&w=600' make='Audi'/>
                </SwiperSlide>

            </Swiper>
        </div>
    </div>
  )
}

export default Find