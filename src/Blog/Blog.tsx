/* eslint-disable prefer-const */
import React from 'react'
import blogOneImg from '../img/blog-1-img.png'
import blogTwoImg from '../img/blog-2-img.png'
import blogThreeImg from '../img/blog-3-img.png'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Blog: React.FC = () => {
  const arrBlog = [
    {
      img: blogOneImg,
      title: '2021 Mid-South Parking and Transportation (MSPTA) Conference',
      date: 'September 21, 2021'
    },
    {
      img: blogTwoImg,
      title: '2021 Parking Industry Expo (PIE)',
      date: 'September 21, 2021'
    },
    {
      img: blogThreeImg,
      title: '2021 International Parking & Mobility Institute (IPMI) Conference',
      date: 'September 16, 2021'
    }
  ]

  return (
    <section className='blog' id='blog'>
      <div className="container">
        <p className='blog__title'>
          Our blog posts
        </p>
        <Swiper
      spaceBetween={20}
      pagination={{ clickable: true }}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {arrBlog.map(el => (
          <SwiperSlide key={el.title}>
          <img src={el.img} className='blog__block-item_img'/>
          <p className='blog__block-item_title'>
            {el.title}
          </p>
          <p className='blog__block-item_date'>
            {el.date}
          </p>
          </SwiperSlide>
      ))}
    </Swiper>
        <div className='blog__block'>
         {arrBlog.map(el => (
          <div key={el.title} className='blog__block-item'>
          <img src={el.img} className='blog__block-item_img' data-aos="zoom-out" data-aos-duration='2000'/>
          <p className='blog__block-item_title'>
            {el.title}
          </p>
          <p className='blog__block-item_date'>
            {el.date}
          </p>
          </div>
         ))}
        </div>

        <button className='blog__button'>
          Read all posts
        </button>
      </div>
    </section>
  )
}
