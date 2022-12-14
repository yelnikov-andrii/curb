import React from 'react'

export const Impact: React.FC = () => {
  return (
    <section className='impact' id='impact'>
    <div className="container">
      <h2 className='impact__title' data-aos="fade-right" data-aos-duration='2000'>
        Power up the future of cities
      </h2>
      <div className='impact__block'>
        <p className='impact__block-left' data-aos="fade-right" data-aos-duration='2000'>
          We&apos;re building a new paradigm of urban mobility that understands and adapts to the world around it. We empower cities with dynamic tools to make streets safer, less congested, and more productive.
        </p>
        <div className='impact__block-right'>
          <p className='impact__block-right_txt' data-aos="fade-left" data-aos-duration='2000'>
            Read more on how we&apos;re improving transportaiton on our impact page.
          </p>
          <a className='impact__block-right_link' href='/' data-aos="fade-left" data-aos-duration='2000'>
            Social impact
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}
