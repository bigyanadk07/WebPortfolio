import React from 'react'
import Homehero from '../internalComponents/HomeHero'
import Header from '../components/header'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Footer from '../components/footer'
import OngoingProj from '../components/ongoingprojects'
import ContactSection from '../components/contact'
import Certifications from './certifications'

const home:React.FC = () => {
  return (
    <div>
        <Header/>
        <Homehero/>
        <Skills/>
        <Projects/>
        <Certifications/>
        <OngoingProj/>
        <ContactSection/>
        <Footer/>
    </div>
  )
}

export default home
