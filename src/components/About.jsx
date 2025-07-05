import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaLock, FaCode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const iconsMap = {
  react: <FaReact size={24} color="#61DAFB" />,
  node: <FaNodeJs size={24} color="#68A063" />,
  mongodb: <SiMongodb size={24} color="#47A248" />,
  security: <FaLock size={24} color="#F87171" />,
  code: <FaCode size={24} color="#A78BFA" />
};

function About({ portfolioData }) {
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

  const itemVariants = {
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
    <section id="about" className="py-20 px-4">
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 
          className="text-4xl font-bold text-white text-center mb-16"
          variants={itemVariants}
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Me</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              {portfolioData.personal.about.paragraph1}
            </motion.p>
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              {portfolioData.personal.about.paragraph2}
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              {portfolioData.personal.stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="text-2xl font-bold text-indigo-400">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10"
              whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
            >
              <motion.h3 
                className="text-2xl font-bold text-white mb-6"
                variants={itemVariants}
              >
                What I Do
              </motion.h3>
              <div className="space-y-4">
                {portfolioData.personal.services.map((service, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-4"
                    variants={itemVariants}
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="text-2xl mt-1.5">
                      {iconsMap[service.icon]}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{service.title}</h4>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About 