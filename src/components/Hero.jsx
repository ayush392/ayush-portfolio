import avatarImage from '../assets/avatar.jpg'

function Hero({ portfolioData, scrollToSection }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20"></div>
      <div className="relative z-10 text-center px-4">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center overflow-hidden">
            <img 
              src={avatarImage} 
              alt={portfolioData.personal.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{portfolioData.personal.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            {portfolioData.personal.title}
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            {portfolioData.personal.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 cursor-pointer text-sm sm:text-base"
            >
              View My Work
            </button>
            <a
              href={portfolioData.personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-emerald-500 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 cursor-pointer text-center text-sm sm:text-base"
            >
              View Resume
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 border-2 border-indigo-500 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300 cursor-pointer text-sm sm:text-base"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </section>
  )
}

export default Hero 