import React, { useRef, useEffect } from 'react'
import carImg from '../img/carImg.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const HeaderBlock: React.FC = () => {
  const ref2 = useRef(null)
  const ref = useRef(null)
  const ref1 = useRef(null)

  let el: any
  let el1: any
  let el2: any

  useEffect(() => {
    el = ref.current
    el1 = ref1.current
    el2 = ref2.current
    window.addEventListener('scroll', makeScroll)
    AOS.init()
    AOS.refresh()
  }, [])

  const makeScroll = (): void => {
    el.style.transform = `translateY(${window.scrollY / 5}%)`
    el1.style.transform = `translateY(-${window.scrollY / 5}%) rotate(-180deg)`
    el2.style.transform = `translateY(-${window.scrollY / 2}%) rotate(-180deg)`
  }

  return (
    <div className='header__block'>
      <img src={carImg} className='header__nav-carimg' ref={ref} />
      <img src={carImg} className='header__block-carimg' ref={ref2} />
        <h1 className='header__title' data-aos={'fade-right'} data-aos-duration="2000">
          Connecting the curb to new insights
        </h1>
        <div className="header__txt-wrapper">
          <p className="header__txt">
            Real-time curb data for smart cities.
          </p>
          <p className="header__txt">
            Measure occupancy, analyze demand, and
          </p>
          <p className="header__txt">
            manage curb space with the right tools.
          </p>
        </div>
        <a className='header__link' href='#book a demo'>
          Book a demo
        </a>
        <img src={carImg} className='header__nav-carimg--bottom' ref={ref1} />
      </div>
  )
}
