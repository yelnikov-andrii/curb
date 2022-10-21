import React from 'react'
import footerLogo from '../img/footerLogo.svg'
import { Icon } from '../types/types'

interface Props {
  headerItemsArr: string[]
  iconsArr: Icon[]
}

export const FooterBlock: React.FC <Props> = ({ headerItemsArr, iconsArr }) => {
  return (
    <div className='footer__block'>
      <div className='footer__block-item'>
        <img src={footerLogo} className='footer__block-item_img'/>
        <p className='footer__block-item_info' data-aos="fade-out" data-aos-duration='2000'>
          © 2021 VADE Group Inc.
        </p>
      </div>
      <div className='footer__block-item'>
        <ul className='footer__block-list'>
          {headerItemsArr.map(item => (
            <li className='footer__block-list_item' key={item} data-aos="fade-out" data-aos-duration='2000'>
              <a className='footer__block-list_link' href={`#${item}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='footer__block-item'>
        <a className='footer__block-item-email' href='mailto: team@vade.ai' data-aos="fade-in" data-aos-duration='2000'>
          team@vade.ai
        </a>
        <ul className='footer__block-item-list--icons'>
          {iconsArr.map(obj => (
            <li key={obj.id} className='footer__block-item-list--icons_item'>
              <a className='footer__block-item-list--icons_link'
              target='_blank' href={obj.url} rel="noreferrer">
                {obj.item}
              </a>
            </li>
          ))}
        </ul>
        <a className='footer__block-item-address' data-aos="fade-out" data-aos-duration='2000' href='https://goo.gl/maps/GLoVSYQgPngMqyDb9' target='_blank' rel="noreferrer">
        16 W Martin St. Suite <br />1101, Raleigh, NC 27601
        </a>
      </div>
      </div>
  )
}
