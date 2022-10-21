import React from 'react'
import { Txt } from '../UI/Txt'
import { TechObj } from '../types/types'

interface Props {
  obj: TechObj
}

export const TechnologyItem: React.FC <Props> = ({ obj }) => {
  return (
    <div className='bottom-block__item' key={obj.title}>
      <img
        src={obj.img}
        className='bottom-block__item-img'
        data-aos="fade-up"
        data-aos-duration="2000"
      />
      <strong
        className='bottom-block__item-title'
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {obj.title}
      </strong>
      <Txt nameOfClass='bottom-block__item-txt'>
        {obj.text}
      </Txt>
    </div>
  )
}
