import React, { useEffect, useCallback } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/customSkills/Skills.jsx'
import About from './components/About'
import Projects from './components/Projects'
import Talk from './components/Talk'
import ParticlesComponent from './components/ParticlesComponent'

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 400 }) // Initialize AOS
  }, [])
  return (
    <div className="min-h-screen bg-stone-50 py-10 px-4 ">
      <ParticlesComponent />
      <div className="relative z-10 py-10 px-4">
        <div className="sticky top-0 w-full z-10 bg-gray bg-opacity-80 backdrop-filter backdrop-blur-lg">
          <Navbar />
        </div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Talk />
        <footer className="mt-10 text-center text-base text-gray-500 font-medium">
          Created by <span className="text-sky-700">Ahmed Belghith</span> | ©
          2025 All rights reserved
        </footer>
      </div>
    </div>
  )
}

export default App
// return (
{
  /* <div className="min-h-screen bg-stone-50 py-10 px-4">
  <ParticlesComponent />
  <div className="sticky top-0 w-full z-10 bg-gray bg-opacity-80 backdrop-filter backdrop-blur-lg">
    <Navbar />
  </div>
  <div className="  p-16">
    <div>
      <Hero />
    </div>
    <div>
      <About />
    </div>
    <div>
      <Skills />
    </div>
    <div>
      <Projects />
    </div>
    <div>
      <Talk />
    </div>
  </div>
</div> */
}
// )
