import { useState, useEffect } from 'react'
import portfolioData from './data/portfolio.json'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-slate-900">
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
      <Footer portfolioData={portfolioData} />
    </div>
  )
}

export default App
