'use client'
// import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import clsx from 'clsx'
import { useActiveSectionContext } from '@/context/active-section-context'

export const Headers = () => {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    // const [activeSection, setActiveSection] = useState('Home');
    return (
        <header className='z-[999] relative'>
            <motion.div className="fixed top-0 left-1/2 -translate-x-1/2 h-[5.8rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}
            >


            </motion.div>
            <nav className="fixed top-[0.35rem] left-1/2 z-[1000] w-[calc(100%-1rem)] max-w-[36rem] -translate-x-1/2 px-1 sm:top-[1.7rem] sm:px-0">
                <ul className="grid w-full grid-cols-3 gap-1 px-1 text-[0.76rem] font-medium text-black sm:flex sm:items-center sm:justify-center sm:gap-5 sm:px-0 sm:text-[0.9rem]">
                    {
                        links.map(link => (
                            <motion.li className='flex items-center justify-center'
                                key={link.hash}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                            >
                                <Link
                                    className={clsx('relative flex w-full items-center justify-center rounded-full px-1.5 py-1.5 hover:text-gray-950 transition sm:px-3 sm:py-3', {
                                        'text-gray-950': activeSection === link.name
                                    })}
                                    href={link.hash}
                                    onClick={() => {
                                        setActiveSection(link.name);
                                        setTimeOfLastClick(Date.now());
                                    }}
                                >
                                    {link.name}
                                    {link.name == activeSection && (
                                        <motion.span className='absolute inset-0 -z-10 shadow-sm bg-gray-100 rounded-full text-gray-950'
                                            layoutId='activeSection'
                                            transition={{
                                                type: 'spring',
                                                stiffness: 380,
                                                damping: 30
                                            }}
                                        ></motion.span>
                                    )}
                                </Link>

                            </motion.li>
                        ))
                    }
                </ul>
            </nav>
        </header >
    )
}

