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
                    By day, I’m a <span className="font-medium">Certified AWS Engineer</span> and Full Stack Developer with expertise in building scalable web applications and cloud infrastructure. I am currently pursuing a Bachelor’s of Engineering at <span className="font-medium">International Institute of Information Technology (I²IT), Pune</span>. 
                    <br />
                    My professional experience includes managing data engineering projects using <span className="font-medium">AWS services</span> such as S3, Lambda, EC2, IAM, and Glue. I’ve designed serverless data pipelines for real-time processing and architected multi-tier web applications integrating services like CloudFront, RDS, and Auto Scaling Groups.
                    <br />
                    My projects include a <span className="italic">Full Stack Paytm Payment application</span>, a user-friendly payment gateway for merchants, and a blogging platform with complete CRUD functionality. Additionally, I’ve developed <span className="italic">Nuro</span>, an AI-driven chatbot, and led teams in delivering innovative solutions.
                    <br />
                    My core skills span <span className="font-medium">AWS Cloud, ETL pipelines, Linux systems, SQL, and Full Stack Development</span>. I am passionate about leveraging technology to optimize processes, solve real-world challenges, and drive innovation.
                </p>
            </div>
        </motion.section>
    )
}

