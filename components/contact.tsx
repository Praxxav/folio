'use client'

import React, { useState, useEffect } from 'react'
import SectionHeading from './section-Header'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { BsEnvelope, BsPhone, BsGeoAlt, BsLinkedin, BsGithub, BsArrowRight, BsTerminal, BsChevronRight } from 'react-icons/bs'

/* ── Typing animation hook ── */
function useTypingEffect(text: string, speed: number = 40, startDelay: number = 0, trigger: boolean = true) {
    const [displayed, setDisplayed] = useState('');
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        if (!trigger) return;
        setDisplayed('');
        setIsDone(false);
        let i = 0;
        const delayTimer = setTimeout(() => {
            const interval = setInterval(() => {
                if (i < text.length) {
                    setDisplayed(text.slice(0, i + 1));
                    i++;
                } else {
                    setIsDone(true);
                    clearInterval(interval);
                }
            }, speed);
            return () => clearInterval(interval);
        }, startDelay);
        return () => clearTimeout(delayTimer);
    }, [text, speed, startDelay, trigger]);

    return { displayed, isDone };
}

/* ── Terminal Line component ── */
function TerminalLine({ command, output, delay, inView }: {
    command: string; output: string; delay: number; inView: boolean;
}) {
    const [showLine, setShowLine] = useState(false);
    const { displayed: cmdText, isDone: cmdDone } = useTypingEffect(command, 30, delay, showLine);
    const { displayed: outText } = useTypingEffect(output, 15, delay + command.length * 30 + 200, showLine);

    useEffect(() => {
        if (inView) setShowLine(true);
    }, [inView]);

    if (!showLine) return null;

    return (
        <div className='mb-3'>
            <div className='flex items-center gap-2'>
                <span className='text-emerald-400 font-semibold text-xs select-none'>❯</span>
                <span className='text-cyan-300 font-mono text-sm'>{cmdText}</span>
                {!cmdDone && <span className='inline-block w-2 h-4 bg-cyan-400 animate-terminal-cursor' />}
            </div>
            {cmdDone && outText && (
                <div className='ml-5 text-gray-300 font-mono text-sm mt-0.5'>
                    {outText}
                </div>
            )}
        </div>
    );
}

export default function Contact() {
    const { ref } = useSectionInView("Contact", 0.5);
    const [isInView, setIsInView] = useState(false);
    // Client-only: rendering the date during SSR causes a hydration mismatch
    const [loginDate, setLoginDate] = useState('');
    useEffect(() => {
        setLoginDate(new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }));
    }, []);

    const contactItems = [
        {
            icon: <BsEnvelope className='text-lg' />,
            label: 'Email',
            value: 'kulkarnipranav901@gmail.com',
            href: 'mailto:kulkarnipranav901@gmail.com',
            gradient: 'from-blue-500 to-cyan-400',
            shadow: 'shadow-blue-500/20',
            command: 'echo $EMAIL',
            output: 'kulkarnipranav901@gmail.com',
        },
        {
            icon: <BsPhone className='text-lg' />,
            label: 'Phone',
            value: '+91 9403579863',
            href: 'tel:+919403579863',
            gradient: 'from-teal-500 to-emerald-400',
            shadow: 'shadow-teal-500/20',
            command: 'echo $PHONE',
            output: '+91 9403579863',
        },
        {
            icon: <BsGeoAlt className='text-lg' />,
            label: 'Location',
            value: 'Pune, Maharashtra',
            href: null,
            gradient: 'from-violet-500 to-purple-400',
            shadow: 'shadow-violet-500/20',
            command: 'echo $LOCATION',
            output: 'Pune, Maharashtra 411017',
        },
        {
            icon: <BsLinkedin className='text-lg' />,
            label: 'LinkedIn',
            value: 'pranav-kulkarni',
            href: 'https://www.linkedin.com/in/pranav-kulkarni-316721248/',
            gradient: 'from-blue-600 to-blue-400',
            shadow: 'shadow-blue-600/20',
            command: 'open $LINKEDIN',
            output: 'linkedin.com/in/pranav-kulkarni',
        },
        {
            icon: <BsGithub className='text-lg' />,
            label: 'GitHub',
            value: 'Praxxav',
            href: 'https://github.com/Praxxav/',
            gradient: 'from-gray-600 to-gray-400',
            shadow: 'shadow-gray-500/20',
            command: 'open $GITHUB',
            output: 'github.com/Praxxav',
        },
    ];

    const terminalLines = [
        { command: 'whoami', output: 'pranav-kulkarni // DevOps & SRE Engineer' },
        { command: 'cat /etc/status', output: 'DevOps Engineer I @ Aleph Technologies' },
        { command: 'uptime', output: '24/7 — always building, always shipping' },
    ];

    return (
        <section
            ref={ref}
            id='contact'
            className='mb-28 w-full max-w-[68rem] scroll-mt-28 sm:mb-40 relative px-4'
        >
            {/* ── Ambient background effects ── */}
            <div className='absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-teal-500/8 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none' />
            <div className='absolute -bottom-20 -left-32 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none' />
            <div className='absolute -bottom-20 -right-32 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none' />

            {/* ── Section Header ── */}
            <div className='text-center mb-14'>
                <SectionHeading>Contact</SectionHeading>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className='text-gray-500 text-lg max-w-lg mx-auto leading-relaxed'
                >
                    Ready to architect the next big thing? Let&apos;s{' '}
                    <span className='font-bold bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 text-transparent bg-clip-text animate-gradient-x'>
                        connect
                    </span>
                    .
                </motion.p>
            </div>

            {/* ── Main Grid: Terminal + Cards ── */}
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 items-start'>

                {/* ── LEFT: Terminal Card (takes 3 cols on lg) ── */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => setIsInView(true)}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
                    className='lg:col-span-3 relative group'
                >
                    {/* Outer glow */}
                    <div className='absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-teal-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700' />

                    <div className='relative bg-gray-950 rounded-2xl shadow-2xl shadow-black/30 border border-gray-800/80 overflow-hidden'>
                        {/* Title bar */}
                        <div className='flex items-center justify-between px-5 py-3 bg-gray-900/80 border-b border-gray-800/50'>
                            <div className='flex items-center gap-2'>
                                <div className='flex gap-1.5'>
                                    <div className='w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors' />
                                    <div className='w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-400 transition-colors' />
                                    <div className='w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-400 transition-colors' />
                                </div>
                            </div>
                            <div className='flex items-center gap-2 text-gray-500 text-xs font-mono'>
                                <BsTerminal className='text-teal-400' />
                                <span>pranav@sre-workstation ~</span>
                            </div>
                            <div className='w-12' /> {/* spacer */}
                        </div>

                        {/* Terminal body */}
                        <div className='p-6 min-h-[280px] font-mono text-sm'>
                            {/* Welcome banner */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className='mb-5 text-gray-600 text-xs'
                            >
                                <pre className='text-teal-500/60 text-[10px] leading-tight mb-3 select-none'>{`
  ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗
 ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝
 ██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║
 ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║
 ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║
  ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝`}
                                </pre>
                                <span className='text-gray-600'>Last login: {loginDate} on ttys001</span>
                            </motion.div>

                            {/* Typed terminal lines */}
                            {terminalLines.map((line, i) => (
                                <TerminalLine
                                    key={i}
                                    command={line.command}
                                    output={line.output}
                                    delay={800 + i * 2200}
                                    inView={isInView}
                                />
                            ))}

                            {/* Blinking cursor at the end */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 8 }}
                                className='flex items-center gap-2 mt-4'
                            >
                                <span className='text-emerald-400 font-semibold text-xs select-none'>❯</span>
                                <span className='inline-block w-2.5 h-5 bg-emerald-400 animate-terminal-cursor' />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* ── RIGHT: Contact Cards Stack (takes 2 cols on lg) ── */}
                <div className='lg:col-span-2 flex flex-col gap-3'>
                    {contactItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.1 + 0.08 * index,
                                type: 'spring',
                                stiffness: 150,
                            }}
                            viewport={{ once: true }}
                            className='group relative'
                        >
                            {item.href ? (
                                <a
                                    href={item.href}
                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                    rel='noopener noreferrer'
                                    className='block'
                                >
                                    <ContactCard item={item} />
                                </a>
                            ) : (
                                <ContactCard item={item} />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── Bottom CTA ── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className='mt-14 text-center'
            >
                <a
                    href='mailto:kulkarnipranav901@gmail.com'
                    className='group relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-white overflow-hidden shadow-xl shadow-teal-500/15 hover:shadow-teal-500/30 transition-shadow duration-500'
                >
                    {/* Animated gradient background */}
                    <span className='absolute inset-0 bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-[length:200%_100%] animate-gradient-x' />
                    {/* Shine sweep */}
                    <span className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700' />
                    <span className='relative flex items-center gap-2'>
                        <BsEnvelope className='text-lg' />
                        Let&apos;s Work Together
                        <BsArrowRight className='group-hover:translate-x-1.5 transition-transform duration-300' />
                    </span>
                </a>
            </motion.div>

            {/* Decorative bottom line */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
                className='mt-12 mx-auto max-w-sm h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent'
            />
        </section>
    );
}

/* ── Contact Card Sub-component ── */
function ContactCard({ item }: { item: {
    icon: React.ReactNode; label: string; value: string; gradient: string; shadow: string;
}}) {
    return (
        <div className={`relative flex items-center gap-4 px-5 py-4 rounded-xl
            bg-white/60 backdrop-blur-md border border-gray-200/60
            group-hover:bg-white group-hover:border-gray-300/80
            group-hover:shadow-lg group-hover:${item.shadow}
            group-hover:-translate-y-0.5
            transition-all duration-300 cursor-pointer`}
        >
            {/* Icon orb */}
            <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient}
                flex items-center justify-center text-white shadow-md
                group-hover:scale-110 group-hover:shadow-lg group-hover:rotate-2
                transition-all duration-300`}
            >
                {item.icon}
            </div>

            <div className='flex-1 min-w-0'>
                <span className='block text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold mb-0.5'>
                    {item.label}
                </span>
                <span className='block text-gray-800 font-medium text-sm truncate group-hover:text-gray-900 transition-colors'>
                    {item.value}
                </span>
            </div>

            {/* Arrow indicator */}
            <BsChevronRight className='text-gray-300 group-hover:text-teal-500 group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0' />
        </div>
    );
}
