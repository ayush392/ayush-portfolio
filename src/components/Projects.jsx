import { motion } from 'framer-motion';

function Projects({ portfolioData }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
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
    <section id="projects" className="py-20 px-4 bg-black/20">
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2 
          className="text-4xl font-bold text-white text-center mb-16"
          variants={cardVariants}
        >
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Projects</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-indigo-500/50 transition-all duration-300 group"
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="relative h-48 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-6xl">
                    {project.icon || '🚀'}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs border border-indigo-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  {project.link && project.link !== '#' && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-cyan-700 transition-all duration-300 text-center cursor-pointer"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Live Demo
                    </motion.a>
                  )}
                  {project.github && project.github !== '#' && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 border-2 border-indigo-500 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300 text-center cursor-pointer"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      GitHub
                    </motion.a>
                  )}
                  {(!project.link || project.link === '#') && (!project.github || project.github === '#') && (
                    <motion.button 
                      className="w-full py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-cyan-700 transition-all duration-300 cursor-pointer"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      View Project
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects 