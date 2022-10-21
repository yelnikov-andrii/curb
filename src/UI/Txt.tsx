import classNames from 'classnames'
import React from 'react'

interface Props {
  children: string
  nameOfClass: string
}

export const Txt: React.FC <Props> = ({ children, nameOfClass }) => {
  return (
    <p className={classNames('txt', nameOfClass)} data-aos="fade-up-left" data-aos-duration="2000">
      {children}
    </p>
  )
}
