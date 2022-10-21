import React from 'react'
import { imagesArr } from '../data/data'
import analyticData from '../img/analyticData.png'
import imgTransAgency from '../img/img-transportation-agency.png'
import { Title } from '../UI/Title'
import { Txt } from '../UI/Txt'

export const About: React.FC = () => {
  return (
    <section className='about' id='about us'>
      <div className="container">
        <Title nameOfClass='about__header'>
          Collect, analyze, and visualize occupancy data
        </Title>
        <Txt nameOfClass='about__txt'>
          Visualize demand with dashboards for curb utilization and compliance.
        </Txt>
        <img src={analyticData} className='about__image' data-aos="fade-up" data-aos-duration="3000"/>
        <div className="about__leaders">
          <Title nameOfClass='about__leaders-title'>
            Trusted by leaders in urban transportation
          </Title>
          <Txt nameOfClass='about__leaders-txt'>
            Transparency and quality are the basis of our work, and we&apos;ve helped cities and vendors across the United States.
          </Txt>
          <p className='about__leaders-also' data-aos="fade-up" data-aos-duration="3000">Here&apos;s who we&apos;ve worked with</p>
          <div className='about__leaders-list'>
            {imagesArr.map(image => (
              <img src={image} key={image} data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"/>
            ))}
          </div>
        </div>
        <div className="about__feedback">
          <div className='about__feedback-txt' data-aos="fade-up" data-aos-duration="3000">
            “Curb management can help ensure that curb space is allocated more equitably, providing access to this limited resource to all street users, including our most vulnerable.”
          </div>
          <div className='about__feedback-block-logo'>
            <img className='about__feedback-block-logo_img' src={imgTransAgency} data-aos="zoom-in" data-aos-duration="2000"/>
            <div className='about__feedback-block-logo_txt'>
              <p className='about__feedback-block-logo_title' data-aos="fade-up" data-aos-duration="3000">
              San Francisco
              </p>
              <p className='about__feedback-block-logo_desc' data-aos="fade-up" data-aos-duration="3000">
              Municipal Transportation Agency
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
