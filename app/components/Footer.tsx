export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">© {new Date().getFullYear()} Muhammad Balaj Javed. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Home
            </a>
            <a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Experience
            </a>
            <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
