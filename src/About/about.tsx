import React from 'react'
import analyticData from '../img/analyticData.png'
import whoWorkWith1 from '../img/who-work-with-1.png'
import whoWorkWith2 from '../img/who-work-with-2.png'
import whoWorkWith3 from '../img/who-work-with-3.png'
import whoWorkWith4 from '../img/who-work-with-4.png'
import whoWorkWith5 from '../img/who-work-with-5.png'
import whoWorkWith6 from '../img/who-work-with-6.png'
import whoWorkWith7 from '../img/who-work-with-7.png'
import whoWorkWith8 from '../img/who-work-with-8.png'
import imgTransAgency from '../img/img-transportation-agency.png'

export const About: React.FC = () => {
  const imagesArr = [whoWorkWith1, whoWorkWith2, whoWorkWith3, whoWorkWith4, whoWorkWith5, whoWorkWith6, whoWorkWith7, whoWorkWith8]

  return (
    <section className='about' id='about us'>
      <div className="container">
        <h2 className='about__header' data-aos="fade-up" data-aos-duration="3000">
          Collect, analyze, and visualize occupancy data
        </h2>
        <p className='about__txt' data-aos="fade-up" data-aos-duration="3000">
          Visualize demand with dashboards for curb utilization and compliance.
        </p>
        <img src={analyticData} className='about__image' data-aos="fade-up" data-aos-duration="3000"/>
        <div className="about__leaders" >
          <h3 className='about__leaders-title' data-aos="fade-up" data-aos-duration="3000">
            Trusted by leaders in urban transportation
          </h3>
          <p className='about__leaders-txt' data-aos="fade-up" data-aos-duration="3000">
            Transparency and quality are the basis of our work, and we&apos;ve helped cities and vendors across the United States.
          </p>
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
