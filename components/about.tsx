'use client'

import React from 'react'
import SectionHeader from './section-Header'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
    const { ref } = useSectionInView("About", 0.55);

    return (
        <motion.section
            ref={ref}
            className='mb-28 text-center max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.175,
            }}
            id='about'
        >
            <SectionHeader>About me</SectionHeader>
            <div className="mb-3 sm:mx-2 mx-6 sm:text-center text-justify">
                <p>
                    By day, I’m a Full Stack Devloper, conquering challenges at the intersection of frontend and backend development, pursuing a Bachelor’s of Engineering at <span className="font-medium"> International Institute of Information Technology (I²IT), Pune  </span>. By night, I’m constantly innovating, whether it’s fine-tuning <span className="font-medium">Large Language Models (LLMs)</span> using <span className="font-medium"></span> or crafting powerful applications with the <span className="font-medium">MERN stack</span>.
                    <br />
                    My adventures include building <span className="italic">Full Stack Paytm Payment application</span> and designing Payment gateway for merchant app and Devloping Own blogging Platform performing CRUD operations.From working on Nuro An AI driven chatbot to leading development teams. I thrive in projects where I can bring creativity and cutting-edge technology together.
                    <br />
                    My core skills include <span className="font-medium">Machine Learning, SQL,AWS-cloud and Full Stack Development</span>, but my true passion lies in solving real-world problems and optimizing processes to be faster and smarter. <br />I’m always up for a challenge.
                </p>
            </div>
        </motion.section>
    )
}
