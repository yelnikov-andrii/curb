import React, { Dispatch, SetStateAction } from 'react'

interface Props {
  popUpVisible: boolean
  setPopUpVisible: Dispatch<SetStateAction<boolean>>
}

export const HeaderBottom: React.FC <Props> = ({ popUpVisible, setPopUpVisible }) => {
  return (
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
  )
}
