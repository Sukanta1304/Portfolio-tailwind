import React from 'react'
import Navbar from '../../layouts/Navbar'
import HomeHero from './HomeHero'
import About from './About'
import Featured from './Featured'
import Pricing from './Pricing'
import Projects from './Projects'
import Cta from './Cta'
import Contact from './Contact'
import Footer from '../../layouts/Footer'
import HomeHero2 from './HomeHero2'

function Home() {
  return (
    <div style={{background:'linear-gradient(to top, #7f7fd5, #86a8e7, #91eae4)'}}>
        <Navbar/>
        {/* <HomeHero/> */}
        <HomeHero2/>
        <About/>
        <Featured/>
        <Projects/>
        <Cta/>
        <Contact/>
        {/* <Pricing/> */}
        <Footer/>
    </div>
  )
}

export default Home