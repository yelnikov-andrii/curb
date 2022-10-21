import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { HeaderLink } from './HeaderLink'

interface Props {
  headerItemsArr: string[]
}

export const HeaderNav: React.FC <Props> = ({ headerItemsArr }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleMenu = (): void => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <nav className='header__nav'>
    <Link to='/' className='header__logo'>
      Vade
    </Link>
    <ul className='header__list header-list'>
      {headerItemsArr.map(item => (
        <HeaderLink item={item} key={item} liClass="header-list__item" aClass="header-list__link" />
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
        <HeaderLink item={item} key={item} liClass="header-list__item" aClass="header-list__link menu-list__link" />
      ))}
    </ul>
  </nav>
  )
}
