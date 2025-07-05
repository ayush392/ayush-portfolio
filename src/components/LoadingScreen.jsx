import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 300);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${progress}%`,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-slate-900 flex items-center justify-center z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="text-center">
        <motion.div
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center"
          variants={logoVariants}
          animate="visible"
        >
          <span className="text-2xl font-bold text-white">AG</span>
        </motion.div>
        
        <motion.h1
          className="text-2xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          Ayush Goyal
        </motion.h1>
        
        <motion.p
          className="text-gray-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          Loading Portfolio...
        </motion.p>
        
        <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"
            variants={progressVariants}
            animate="visible"
          />
        </div>
        
        <motion.p
          className="text-gray-500 mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          {progress}%
        </motion.p>
      </div>
    </motion.div>
  );
}

export default LoadingScreen; 