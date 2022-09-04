import React from 'react'
import { Header } from './Header/Header'
import { Technology } from './Technology/Technology'
import './App.scss'
import { About } from './About/about'
import { Impact } from './Impact/Impact'
import { Blog } from './Blog/Blog'
import { Form } from './Form/Form'
import { Footer } from './Footer/Footer'

const App: React.FC = () => {
  const headerItemsArr = ['technology', 'about us', 'impact', 'blog', 'book a demo']

  return (
    <>
    <Header headerItemsArr={headerItemsArr} />
    <Technology />
    <About />
    <Impact />
    <Blog />
    <Form />
    <Footer headerItemsArr={headerItemsArr}/>
    </>
  )
}

export default App
