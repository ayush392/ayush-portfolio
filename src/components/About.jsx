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
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              {portfolioData.personal.about.paragraph1}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {portfolioData.personal.about.paragraph2}
            </p>
            <div className="flex flex-wrap gap-4">
              {portfolioData.personal.stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-indigo-400">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">What I Do</h3>
              <div className="space-y-4">
                {portfolioData.personal.services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-2xl mt-1.5">{iconsMap[service.icon]}</div>
                    <div>
                      <h4 className="text-white font-semibold">{service.title}</h4>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 