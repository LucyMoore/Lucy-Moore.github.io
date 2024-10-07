import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import Textbox from './textbox'
import Experience from './Experience'
import AboutMe from './AboutMe'
import References from './References'
import PersonalInfo from './personalInfo'
import Photo from './Photo'

function App() {
  return (
    <>
      <div className="wrapper">
        here is the content
        <Experience></Experience>
        <AboutMe></AboutMe>
        <References></References>
        <PersonalInfo></PersonalInfo>
        <Photo></Photo>
      </div>
    </>
  )
}

export default App
