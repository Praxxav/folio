'use client'

import Image from 'next/image'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import selfPotrait from '@/public/pranav.jpeg'
import Link from 'next/link'
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { useSectionInView } from '@/lib/hooks'

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { scrollY } = useScroll();
    const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
    const heroY = useTransform(scrollY, [0, 400], [0, 100]);
    const heroScale = useTransform(scrollY, [0, 400], [1, 0.95]);

    return (
        <section ref={ref} id='home' className='mb-28 w-full max-w-[50rem] px-4 text-center sm:mb-0 scroll-mt-[100rem]'>
            <motion.div
                style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
            >
                <div className='flex items-center justify-center'>
                    <div className='relative'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: 'tween',
                                duration: 0.2
                            }}
                        >
                            {<Image src={selfPotrait}
                                alt="Pranav Kulkarni"
                                width="192"
                                height="192"
                                priority={true}
                                quality="95"
                                className=' object-cover h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl'
                            />}
                        </motion.div>
                        <motion.span className='absolute bottom-0 right-0 text-4xl'
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 125,
                                delay: 0.1,
                                duration: 0.7
                            }}
                        >
                            👋
                        </motion.span>
                    </div>
                </div>
                <motion.h1
                    className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-center"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {/* --- COMMENTED OUT: Old Full Stack intro text ---
                    <span className="font-bold">Hi, I'm Pranav Kulkarni</span> —{" "}
                    <span className="font-bold inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text whitespace-nowrap">
                        Full Stack Developer
                    </span>{" "}
                    <span className="font-bold">building scalable systems</span> and crafting{" "}
                    <span className="font-bold">impactful digital experiences</span>.
                    --- END COMMENTED OUT --- */}

                    <span className="font-bold">Hi, I&apos;m Pranav Kulkarni</span> —{" "}
                    <span className="font-bold inline-block bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text whitespace-nowrap animate-gradient-x">
                        DevOps & SRE Engineer
                    </span>
                    <span className="block mt-1 text-sm text-gray-500 dark:text-gray-400 font-light tracking-[0.25em] uppercase">
                        (Ex - Full Stack Developer)
                    </span>
                    <span className="block mt-4 text-lg sm:text-2xl font-medium text-gray-700">
                        Architecting{" "}
                        <span className="font-bold text-gray-900 border-b-2 border-blue-500">scalable infrastructure</span>,{" "}
                        automating workflows, and ensuring{" "}
                        <span className="font-bold text-gray-900 border-b-2 border-teal-500">high availability</span>{" "}
                        systems.
                    </span>
                </motion.h1>

                <motion.div
                    className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.1
                    }}
                >
                    <Link
                        href="mailto:kulkarnipranav901@gmail.com"
                        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 shadow-md hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    >
                        Contact me here <BsArrowRight
                            className=' opacity-70 group-hover:translate-x-2 transition' />
                    </Link>

                    <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 shadow-md' href='/PranavK.pdf' download={true}>
                        Download CV <HiDownload
                            className='opacity-60 group-hover:translate-y-1 transition'
                        />
                    </a>

                    <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer hover:text-gray-950 shadow-md border border-black/10' href='https://www.linkedin.com/in/pranav-kulkarni-316721248/' target='_blank'>
                        <BsLinkedin />
                    </a>

                    <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer hover:text-gray-950 shadow-md border border-black/10' href='https://github.com/Praxxav' target='_blank'>
                        <BsGithub />
                    </a>

                </motion.div>
            </motion.div>

        </section>
    )
}
