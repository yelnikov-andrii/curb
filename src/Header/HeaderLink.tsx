/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react'

interface Props {
  item: string
  liClass: string
  aClass: string
}

export const HeaderLink: React.FC <Props> = ({ item, liClass, aClass }) => {
  return (
    <li
      className={liClass}
      data-aos={'fade-right'}
      data-aos-duration="2000"
    >
      <a href={`#${item}`} className={aClass}>
        {item}
      </a>
    </li>
  )
}
