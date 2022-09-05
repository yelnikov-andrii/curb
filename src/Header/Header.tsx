import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import carImg from '../img/carImg.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface Props {
  headerItemsArr: string[]
}

export const Header: React.FC <Props> = ({ headerItemsArr }) => {
  const [popUpVisible, setPopUpVisible] = useState(false)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const ref = useRef(null)
  const ref1 = useRef(null)
  const ref2 = useRef(null)
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
    setTimeout(() => {
      setPopUpVisible(true)
    }, 2000)
  }, [])

  const makeScroll = (): void => {
    el.style.transform = `translateY(${window.scrollY / 5}%)`
    el1.style.transform = `translateY(-${window.scrollY / 5}%) rotate(-180deg)`
    el2.style.transform = `translateY(-${window.scrollY / 2}%) rotate(-180deg)`
  }

  const toggleMenu = (): void => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <header className='header'>
      <div className="container">
        <nav className='header__nav'
          >
            <img src={carImg} className='header__nav-carimg' ref={ref} />
          <Link to='/' className='header__logo'>
            Vade
          </Link>
          <ul className='header__list header-list'>
            {headerItemsArr.map(item => (
              <li className='header-list__item' key={item} data-aos={'fade-right'} data-aos-duration="2000">
                <a href={`#${item}`} className='header-list__link'>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a
            className={classNames('header__menu-opener', { 'header__menu-opener--open': menuIsOpen })} onClick={() => {
              toggleMenu()
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
          <ul className={classNames('header__list menu-list', {
            'menu-list--active': menuIsOpen
          })}
          onClick={() => {
            setMenuIsOpen(false)
          }}>
            {headerItemsArr.map(item => (
              <li className='header-list__item' key={item}>
                <a href={`#${item}`} className='header-list__link'>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='header__block'>
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
        <div className='header__bottom'>
          {popUpVisible && (
            <div className='header__bottom-container'>
            <p className='header__bottom-txt'>
              We use cookies to provide you with the best website experience
            </p>
          <button
            className='header__bottom-button'
            onClick={() => {
              setPopUpVisible(false)
            }}>
            Agree
          </button>
          </div>
          )}
        </div>
      </div>
    </header>
  )
}
