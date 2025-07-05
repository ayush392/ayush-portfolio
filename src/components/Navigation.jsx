import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Navigation({ portfolioData, activeSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const navItemVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">{portfolioData.personal.name}</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section, index) => (
                <motion.button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                    activeSection === section
                      ? 'text-indigo-400 bg-indigo-900/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                  variants={navItemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              className="text-gray-300 hover:text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/50 backdrop-blur-md rounded-lg mt-2">
                {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section, index) => (
                  <button
                    key={section}
                    onClick={() => handleNavClick(section)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer ${
                      activeSection === section
                        ? 'text-indigo-400 bg-indigo-900/30'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation 