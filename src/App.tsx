import { BrowserRouter as Router } from 'react-router-dom'

import Experiences from './sections/Experiences'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar'
import Projects from './sections/Projects'

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Hero />
        <Projects />
        <Experiences />
        <Footer />
      </Router>
    </>
  )
}

export default App
