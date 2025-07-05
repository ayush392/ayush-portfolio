import { motion } from 'framer-motion';

function Skills({ portfolioData }) {
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

  return (
    <section id="skills" className="py-20 px-4">
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
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Skills</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.map((skillCategory, index) => (
            <motion.div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
            >
              <motion.h3 
                className="text-xl font-bold text-white mb-4"
                variants={cardVariants}
              >
                {skillCategory.category}
              </motion.h3>
              
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={cardVariants}
              >
                {skillCategory.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm border border-indigo-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills 