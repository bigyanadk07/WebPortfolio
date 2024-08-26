import React from 'react'
import Homehero from '../internalComponents/HomeHero'
import Header from '../components/header'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Footer from '../components/footer'
import OngoingProj from '../components/ongoingprojects'
import ContactSection from '../components/contact'

const home:React.FC = () => {
  return (
    <div>
        <Header/>
        <Homehero/>
        <Skills/>
        <Projects/>
        <OngoingProj/>
        <ContactSection/>
        <Footer/>
    </div>
  )
}

export default home
