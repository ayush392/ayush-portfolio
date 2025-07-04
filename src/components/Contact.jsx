function Contact({ portfolioData }) {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">{portfolioData.contact.title}</h3>
            <p className="text-gray-300 mb-8">
              {portfolioData.contact.description}
            </p>
            <div className="space-y-4">
              {portfolioData.contact.info.map((contact, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-2xl">{contact.icon}</div>
                  <div>
                    <div className="text-white font-semibold">{contact.label}</div>
                    <div className="text-gray-400">{contact.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                {Object.entries(portfolioData.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    {portfolioData.socialIcons[platform]}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <form className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-cyan-700 transition-all duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 