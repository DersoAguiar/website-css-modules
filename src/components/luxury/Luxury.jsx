import React from 'react';
import styles from './Luxury.module.css';
import LuxuryCard from './LuxuryCard';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Luxury = () => {
  return (
    <div className={styles.luxury}>
        <div className={styles.heading}>
            <h2>Luxury Selection</h2>
            <div className={styles.text_bg}>
                <p>
                    <span>Select from the top luxury vehicles to roll in style</span>
                </p>
            </div>
        </div>

        <div className={styles.container}>
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
                        slidesPerView: 3,
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
                    <LuxuryCard image='https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600' make='Land Rover'/>
                </SwiperSlide>
                <SwiperSlide>
                    <LuxuryCard image='https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' make='Maserati'/>
                </SwiperSlide>
                <SwiperSlide>
                    <LuxuryCard image='https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=600' make='Rolls Royce'/>
                </SwiperSlide>
                <SwiperSlide>
                    <LuxuryCard image='https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' make='Covertte'/>
                </SwiperSlide>
                <SwiperSlide>
                    <LuxuryCard image='https://images.pexels.com/photos/313779/pexels-photo-313779.jpeg?auto=compress&cs=tinysrgb&w=600' make='BMW'/>
                </SwiperSlide>
                <SwiperSlide>
                    <LuxuryCard image='https://images.pexels.com/photos/12554296/pexels-photo-12554296.jpeg?auto=compress&cs=tinysrgb&w=600' make='Tesla'/>
                </SwiperSlide>
                

            </Swiper>

        </div>


    </div>
  )
}

export default Luxury