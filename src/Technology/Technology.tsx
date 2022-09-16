import React from 'react'
import techImgOne from '../img/tech-img-1.svg'
import techImgTwo from '../img/tech-img-2.svg'
import techImgThree from '../img/tech-img-3.svg'
import videoSecurityImg from '../img/videosecurity.png'

export const Technology: React.FC = () => {
  const dataArrBottomBlock = [
    {
      title: 'Fully wireless hardware',
      text: 'We provide solar and cellular cameras that work anywhere, operate 24/7, and take under 10 minutes to install.',
      img: techImgOne
    },
    {
      title: 'Real-time data',
      text: 'Measure availability and compliance in real-time with our powerful and accurate computer vision pipeline.',
      img: techImgTwo
    },
    {
      title: 'Full service subscription',
      text: 'One subscription for the cameras, installation, maintenance, implementation, software, and support.',
      img: techImgThree
    }
  ]
  return (
    <section className='technology' id='technology'>
      <div className="container">
      <div className='technology__topblock'>
        <div className='technology__topblock-txt topblock'>
        <h2 className='topblock__header' data-aos="fade-up-left" data-aos-duration="2000">
          Get to know the curb better
        </h2>
        <p className='topblock__txt' data-aos="fade-up-left" data-aos-duration="2000">
          Vade replaces legacy parking infrastructure with wireless cameras, computer vision, and granular analytics. We make it easy for cities to monitor and manage curb space in real-time.
        </p>
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
          <div className='bottom-block__item' key={obj.title}>
            <img src={obj.img} className='bottom-block__item-img' data-aos="fade-up"
     data-aos-duration="2000"/>
            <strong className='bottom-block__item-title' data-aos="fade-up"
     data-aos-duration="2000">
              {obj.title}
            </strong>
            <p className='bottom-block__item-txt' data-aos="fade-up"
     data-aos-duration="2000">
              {obj.text}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
