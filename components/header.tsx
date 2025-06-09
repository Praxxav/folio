'use client'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import clsx from 'clsx'
import { useActiveSectionContext } from '@/context/active-section-context'

export const Headers = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className='z-[999] relative'>
      {/* Glassmorphic Nav Container */}
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-20 bg-gradient-to-r from-white/60 to-white/30 shadow-xl shadow-purple-300/10 backdrop-blur-xl transition-all sm:top-7 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-full"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      />

      {/* Nav Items */}
      <nav className="flex fixed top-[0.2rem] left-1/2 -translate-x-1/2 py-2 sm:top-[1.75rem]">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-black sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
                className={clsx(
                  'relative flex items-center justify-center px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:text-black hover:scale-105',
                  {
                    'text-black font-semibold': activeSection === link.name,
                    'text-gray-600': activeSection !== link.name,
                  }
                )}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 shadow-md shadow-purple-400/30"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Headers
