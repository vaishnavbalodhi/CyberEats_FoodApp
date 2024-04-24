import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Categories from './components/Categories'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Categories />
    </>
  )
}

export default App
