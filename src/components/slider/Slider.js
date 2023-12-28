import React from 'react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// import axios from 'axios';

import './slider.css';
// import { Link } from 'react-router-dom';

function Slider() {

    const data = [
        {
            id: 1,
            image: 'https://img.freepik.com/free-vector/internet-marketing-agency-banner-digital-business_107791-2448.jpg?w=1060&t=st=1703760327~exp=1703760927~hmac=19182d8bfd6f0441891ffdc71417a1b914f0a29382de3909b06cfec30c8a9c1c'
        },
        {
            id: 2,
            image: 'https://img.freepik.com/free-vector/horizontal-digital-marketing-agency-web-template-design_23-2148943944.jpg?t=st=1703760243~exp=1703760843~hmac=c45757055eb029b54870baad11eb8807becaa2027490858309362dbb661a2da9'
        },
        {
            id: 3,
            image: 'https://img.freepik.com/premium-vector/illustration-megaphone-different-icons-digital-marketing-concept_1258-4499.jpg?w=900'
        }
    ]

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                autoplay={{
                    delay: 1100,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper slides-flag"
            >
                {data?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='slides-flags'>
                            <div className='img-slider-flag'>
                                <img src={item.image} alt=''></img>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}





            </Swiper>
        </>
    );
}

export default Slider
