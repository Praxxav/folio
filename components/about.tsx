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
    I’m a{" "}
    <span className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text font-bold whitespace-nowrap">
      Full Stack Developer
    </span>{" "}
    and{" "}
    <span className="inline-block bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-transparent bg-clip-text font-bold whitespace-nowrap">
      AWS Cloud Enthusiast
    </span>{" "}
    with hands-on experience in building scalable web applications and cloud infrastructure. I&apos;m  currently pursuing a Bachelor of Engineering in Information Technology at the{" "}
    <span className="font-medium">International Institute of Information Technology (I²IT), Pune</span>, with a strong academic record (CGPA: 8.19).
    <br />
    <br />
    My expertise includes deploying{" "}
    <span className="font-medium">multi-tier web applications</span> using AWS services like{" "}
    <span className="font-medium">EC2, S3, CloudFront, Auto Scaling, and RDS</span>. I&apos;ve  fine-tuned infrastructure with Nginx and optimized performance using load balancing and CDN integrations.
    <br />
    <br />
    I’ve developed projects such as{" "}
    <span className="italic">PropTradX</span>, a proprietary trading platform enabling simulated trading in Forex and Crypto with Razorpay integration, and{" "}
    <span className="italic">Wallet</span>, a full-stack Paytm-style payment app featuring balance checks, fund transfers, and webhooks.
    <br />
    <br />
    My tech stack includes{" "}
    <span className="inline-block bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-transparent bg-clip-text font-bold whitespace-nowrap">
      TypeScript, React, Next.js, Node.js, PostgreSQL, AWS, Docker
    </span>. I’m passionate about creating impactful solutions, automating infrastructure, and contributing to high-performance applications.
  </p>
</div>

        </motion.section>
    )
}

