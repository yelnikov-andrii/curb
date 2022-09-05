import React from 'react'

export const Form: React.FC = () => {
  return (
    <section className='form' id='book a demo'>
    <div className="container">
      <div className='form__block-txt'>
      <h3 className='form__block-txt_title' data-aos="zoom-out" data-aos-duration='2000'>
        Let’s find out how your curbs are used.
      </h3>
      <p className='form__block-txt_txt' data-aos="zoom-out" data-aos-duration='2000'>
        Connect with Vade and see what real-time curb data can do for your city.
      </p>
      </div>
      <div className='form__block-form'>
        <form className='form__block-form_form formBlock'>
          <input placeholder='name' className='formBlock__name formBlock__input'/>
          <input placeholder='email' className='formBlock__email formBlock__input' />
          <input placeholder='company' className='formBlock__company formBlock__input' />
          <input placeholder='position' className='formBlock__position formBlock__input' />
          <textarea placeholder='message' className='formBlock__message formBlock__input'></textarea>
          <button className='formBlock__button'>
            Get in touch
          </button>
        </form>
      </div>
    </div>
    </section>
  )
}
