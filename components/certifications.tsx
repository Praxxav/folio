'use client'

import React from 'react'
import Image from 'next/image'
import SectionHeading from './section-Header'
import { certificationsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { BsBoxArrowUpRight } from 'react-icons/bs'

export default function Certifications() {
    const { ref } = useSectionInView("Experience", 0.5);
    return (
        <section ref={ref} className='mb-28 w-full max-w-[53rem] scroll-my-28 px-4 text-center sm:mb-40'>
            <SectionHeading>
                Certifications
            </SectionHeading>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:mx-2 mx-6'>
                {certificationsData.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 60, rotateY: -15 }}
                        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                        transition={{
                            delay: 0.2 * index,
                            type: 'spring',
                            stiffness: 150,
                            damping: 20,
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.04,
                            boxShadow: '0 12px 40px rgba(59, 130, 246, 0.2)',
                        }}
                        className='group relative bg-white border border-black/5 rounded-2xl shadow-md overflow-hidden cursor-pointer'
                    >
                        {/* Shine overlay on hover */}
                        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'
                            style={{
                                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.1) 50%, transparent 55%)',
                                backgroundSize: '200% 100%',
                                animation: 'shine 2s ease-in-out infinite',
                            }}
                        />

                        {/* Badge Image */}
                        <div className='relative w-full h-48 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center overflow-hidden'>
                            <div className='absolute inset-0 opacity-20'
                                style={{
                                    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59,130,246,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(20,184,166,0.3) 0%, transparent 50%)',
                                }}
                            />
                            <motion.div
                                whileHover={{ scale: 1.08, rotate: 2 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <Image
                                    src={cert.imageUrl}
                                    alt={cert.title}
                                    width={160}
                                    height={160}
                                    className='object-contain drop-shadow-2xl'
                                />
                            </motion.div>
                        </div>

                        {/* Card Content */}
                        <div className='p-5 text-left'>
                            <h3 className='font-bold text-gray-900 text-lg leading-tight mb-1'>
                                {cert.title}
                            </h3>
                            <p className='text-sm text-gray-500 mb-3'>
                                Issued by <span className='font-medium text-gray-700'>{cert.issuer}</span>
                            </p>
                            {cert.link && (
                                <a
                                    href={cert.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-teal-600 transition-colors group/link'
                                >
                                    View Credential
                                    <BsBoxArrowUpRight className='text-xs group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform' />
                                </a>
                            )}
                        </div>

                        {/* Bottom gradient accent bar */}
                        <div className='h-1 w-full bg-gradient-to-r from-blue-500 via-teal-500 to-green-500' />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
