import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <ThemeProvider>
      {loading && <Loader />}
      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-700'}>
        <ParticleBackground />
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Achievements />
          <Resume />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
        <ToastContainer position="bottom-right" theme="dark" />
      </div>
    </ThemeProvider>
  )
}
