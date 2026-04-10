'use client'

import React from 'react'
import SectionHeading from './section-Header'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
        scale: 0.8,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
             delay: 0.05 * index,
             type: 'spring',
             stiffness: 200,
        }
    })
}

export default function Skills() {
    const { ref } = useSectionInView("Skills", 0.7);
    return (
        <section ref={ref} id="skills" className='mb-28 w-full max-w-[58rem] scroll-my-28 px-4 text-center sm:mb-40'>
            <SectionHeading>
                My Skills
            </SectionHeading>
            <ul className='group flex flex-wrap justify-center gap-2 text-lg text-gray-800 sm:mx-2 mx-6'>
                {skillsData.map((skill, index) => (
                    <motion.li
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial='initial'
                        whileInView='animate'
                        whileHover={{
                            scale: 1.12,
                            backgroundColor: '#CCFBF1',
                            boxShadow: '0 4px 20px rgba(20, 184, 166, 0.25)',
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 300
                        }}
                        viewport={{
                            once: true
                        }}
                        className='bg-white border border-black/5 rounded-xl shadow-sm px-5 py-3 cursor-default'
                        custom={index}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section >
    )
}
