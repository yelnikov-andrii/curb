import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { HeaderNav } from './HeaderNav'
import { HeaderBlock } from './HeaderBlock'
import { HeaderBottom } from './HeaderBottom'

interface Props {
  headerItemsArr: string[]
}

export const Header: React.FC <Props> = ({ headerItemsArr }) => {
  const [popUpVisible, setPopUpVisible] = useState(false)

  useEffect(() => {
    AOS.init()
    AOS.refresh()
    setTimeout(() => {
      setPopUpVisible(true)
    }, 2000)
  }, [])

  return (
    <header className='header'>
      <div className="container">
        <HeaderNav
          headerItemsArr={headerItemsArr}
        />
        <HeaderBlock />
        <HeaderBottom popUpVisible={popUpVisible} setPopUpVisible={setPopUpVisible} />
      </div>
    </header>
  )
}
