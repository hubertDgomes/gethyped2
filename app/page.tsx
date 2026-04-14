import React from 'react'
import Container from './components/Container'
import Navbar from './components/layouts/Navbar'
import Home from './components/layouts/Home'
import Cards from './components/layouts/Cards'
import Review from './components/layouts/Review'
import Expertise from './components/layouts/Expertise'
import Content from './components/layouts/Content'
import Scroller from './components/layouts/Scroller'
import Footer from './components/layouts/Footer'

const page = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Cards/>
      <Review/>
      <Expertise/>
      <Content/>
      <Scroller/>
      <Footer/>
    </>
  )
}

export default page