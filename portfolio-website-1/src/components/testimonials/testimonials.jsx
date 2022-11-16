import React from 'react'
import './testimonials.css'
import AVTR1 from '../../images/avatar1.jpg'
import AVTR2 from '../../images/avatar2.jpg'
import AVTR3 from '../../images/avatar3.jpg'
import AVTR4 from '../../images/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name: 'Tina Snow',
        review: "It's Not Enough That I Should Succeed - Other Should Fail"
        
    },
    {
        avatar: AVTR2,
        name: 'Shatta Wale',
        review: 'Education Is Important But Big Biceps Are Importanter'
    },
    {
        avatar: AVTR3,
        name: 'Kwame Despite',
        review: "I Asked God For A Bike, But I Know God Doesn't Work That Way, So I Stole A Bike And Asked God For Forgiveness"
        
    },
    {
        avatar: AVTR4,
        name: 'Nana Ama McBrown',
        review: 'I Got A Haircut And No One Noticed.'
        
    },
]



const Testimonials = () => {
    return (
        <section id = 'testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className='container testimonials_container'
              // install Swiper modules
              modules={[ Pagination ]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
               {
                data.map(({avatar, name, review}, index) =>{
                    return (
                        <SwiperSlide key={index} className='testimonial'>
                        <div className='client_avatar'>
                            <img src={avatar} alt='avtr img'></img>
                        </div>
                        <h5 className='client_name'>{name}</h5>
                        <small className='client_review'>
                            {review}
                        </small>
                        </SwiperSlide>
                    )
                })
               }
            </Swiper>
        </section>
    )
}

export default Testimonials