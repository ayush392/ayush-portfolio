import { motion } from 'framer-motion';

function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.footer 
      className="py-8 px-4 border-t border-white/10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Ayush Goyal. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer 