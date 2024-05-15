import { useState } from 'react'
import Hero from './views/hero'
import Projects from './views/projects'
import Footer from './views/footer'
import './assets/styles/index.css'

function App() {

  return (
    <>
      <div className="main">
        <Hero />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default App
