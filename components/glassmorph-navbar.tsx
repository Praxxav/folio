"use client "
export default function Glassmorph () {
  return (
    <div className="flex justify-center items-start w-full">
      <nav className="w-full flex justify-center">
        <div className="glassmorph-navbar fixed top-6 left-1/2 -translate-x-1/2 max-w-5xl w-11/12 h-16 px-8 flex justify-between items-center
          bg-white/10 backdrop-blur-lg border border-white/30 shadow-xl
          rounded-l-full rounded-r-full
          ring-1 ring-white/20
          transition-all duration-300">
          <ul className="flex space-x-8">
            <li>
              <a href="#home" className="text-white font-semibold hover:text-cyan-300 transition-colors duration-200">Home</a>
            </li>
            <li>
              <a href="#about" className="text-white font-semibold hover:text-cyan-300 transition-colors duration-200">About</a>
            </li>
            <li>
              <a href="#projects" className="text-white font-semibold hover:text-cyan-300 transition-colors duration-200">Projects</a>
            </li>
            <li>
              <a href="#skills" className="text-white font-semibold hover:text-cyan-300 transition-colors duration-200">Skills</a>
            </li>
            <li>
              <a href="#experience" className="text-white font-semibold hover:text-cyan-300 transition-colors duration-200">Experience</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}