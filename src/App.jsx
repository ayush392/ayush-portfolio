import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import portfolioData from './data/portfolio.json'
import LoadingScreen from './components/LoadingScreen'
import {
  Navigation,
  Hero,
  About,
  Experience,
  Skills,
  Projects,
  Contact,
  Footer
} from './components'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    out: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isLoading && (
          <motion.div 
            className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-slate-900"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
          >
            <Navigation 
              portfolioData={portfolioData} 
              activeSection={activeSection} 
              scrollToSection={scrollToSection} 
            />
            <Hero portfolioData={portfolioData} scrollToSection={scrollToSection} />
            <About portfolioData={portfolioData} />
            <Experience portfolioData={portfolioData} />
            <Skills portfolioData={portfolioData} />
            <Projects portfolioData={portfolioData} />
            <Contact portfolioData={portfolioData} />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
