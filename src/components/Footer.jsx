function Footer({ portfolioData }) {
  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          {portfolioData.footer.text}
        </p>
      </div>
    </footer>
  )
}

export default Footer 