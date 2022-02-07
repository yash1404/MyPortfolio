import React from 'react'
import Header from "../Components/Header"
import Banner from "../Components/Banner"
import About from '../Components/About'
import Service from '../Components/Service'
import Skill from '../Components/Skill'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

function HomePage() {
  return (
    <React.Fragment>
      <Header/>
      <Banner/>
      <About/>
      <Service/>
      <Skill/>
      <Projects/>
      <Contact/>
      <Footer/>

    </React.Fragment>
  )
}

export default HomePage;