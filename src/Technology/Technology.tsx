import React from 'react'
import videoSecurityImg from '../img/videosecurity.png'
import { dataArrBottomBlock } from '../data/data'
import { Title } from '../UI/Title'
import { Txt } from '../UI/Txt'
import { TechnologyItem } from './TechnologyItem'

export const Technology: React.FC = () => {
  return (
    <section className='technology' id='technology'>
      <div className="container">
      <div className='technology__topblock'>
        <div className='technology__topblock-txt topblock'>
        <Title nameOfClass='topblock__header'>
          Get to know the curb better
        </Title>
        <Txt nameOfClass='topblock__txt'>
          Vade replaces legacy parking infrastructure with wireless cameras, computer vision, and granular analytics. We make it easy for cities to monitor and manage curb space in real-time.
        </Txt>
        <a className='topblock__link' href='/' data-aos="fade-up-left" data-aos-duration="2000">
          More about our technology
        </a>
        </div>
        <div className='technology__topblock-image'>
          <img src={videoSecurityImg}
               className='technology__topblock-image_img' data-aos="zoom-out-up" data-aos-duration="2000" />
        </div>
      </div>
      <div className='technology__bottom-block bottom-block'>
        {dataArrBottomBlock.map(obj => (
          <TechnologyItem obj={obj} key={obj.title} />
        ))}
      </div>
      </div>
    </section>
  )
}
