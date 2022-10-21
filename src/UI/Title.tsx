import classNames from 'classnames'
import React from 'react'

interface Props {
  children: string
  nameOfClass: string
}

export const Title: React.FC <Props> = ({ children, nameOfClass }) => {
  return (
    <h2 className={classNames('title', nameOfClass)} data-aos="fade-up-left" data-aos-duration="2000">
      {children}
    </h2>
  )
}
