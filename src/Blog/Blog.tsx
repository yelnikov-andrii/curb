/* eslint-disable prefer-const */
import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { arrBlog } from '../data/data'
import 'swiper/css'
import 'swiper/css/pagination'
import { Title } from '../UI/Title'

export const Blog: React.FC = () => {
  return (
    <section className='blog' id='blog'>
      <div className="container">
        <Title nameOfClass='blog__title'>
          Our blog posts
        </Title>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
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
          <p className='blog__block-item_title' data-aos="zoom-out" data-aos-duration='2000'>
            {el.title}
          </p>
          <p className='blog__block-item_date' data-aos="zoom-out" data-aos-duration='2000'>
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
