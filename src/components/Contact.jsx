import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail, MdLocationOn } from "react-icons/md";

const iconsMap = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  leetcode: <SiLeetcode />,
  twitter: <FaTwitter />,
  email: <MdEmail />,
  location: <MdLocationOn />
}

function Contact({ portfolioData }) {
  // Form state
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null); // null | 'success' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const response = await fetch('https://formspree.io/f/mldnypel', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        setResult('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setResult('error');
      }
    } catch (err) {
      setResult('error');
    } finally {
      setLoading(false);
    }
  };

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

  const socialVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <motion.div 
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2 
          className="text-4xl font-bold text-white text-center mb-16"
          variants={itemVariants}
        >
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Touch</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-2xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              {portfolioData.contact.title}
            </motion.h3>
            <motion.p 
              className="text-gray-300 mb-8"
              variants={itemVariants}
            >
              {portfolioData.contact.description}
            </motion.p>
            
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              {portfolioData.contact.info.map((contact, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 p-3 rounded-lg"
                >
                  <div className="text-2xl text-gray-400">
                    {iconsMap[contact.icon]}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{contact.label}</div>
                    <div className="text-gray-400">{contact.value}</div>
                  </div>
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-8"
              variants={itemVariants}
            >
              <h4 className="text-white font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                {Object.entries(portfolioData.social).map(([platform, url], index) => (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer p-2 rounded-full bg-white/5 hover:bg-white/10"
                    variants={socialVariants}
                    whileHover="hover"
                    whileTap="tap"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  >
                    {iconsMap[platform]}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.2 }
            }}
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-all duration-300 focus:bg-white/20"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-all duration-300 focus:bg-white/20"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-all duration-300 focus:bg-white/20 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-cyan-700 transition-all duration-300 cursor-pointer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
              {result === 'success' && (
                <div className="text-green-400 text-center mt-4">Thank you! Your message has been sent.</div>
              )}
              {result === 'error' && (
                <div className="text-red-400 text-center mt-4">Oops! Something went wrong. Please try again.</div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact 