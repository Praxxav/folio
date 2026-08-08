'use client'

import React, { useState, useEffect } from 'react'
import SectionHeader from './section-Header'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { BsTerminal, BsCheckCircleFill, BsCircleFill } from 'react-icons/bs'

/* ── Typing hook for single-line text ── */
function useTyping(text: string, speed = 25, delay = 0, enabled = true) {
  const [shown, setShown] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!enabled) return;
    setShown(''); setDone(false);
    let i = 0;
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        if (i < text.length) { setShown(text.slice(0, ++i)); }
        else { setDone(true); clearInterval(iv); }
      }, speed);
      return () => clearInterval(iv);
    }, delay);
    return () => clearTimeout(t);
  }, [text, speed, delay, enabled]);
  return { shown, done };
}

/* ── Stat badge ── */
function StatBadge({ label, value, gradient, delay }: {
  label: string; value: string; gradient: string; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: 'spring', stiffness: 200 }}
      whileHover={{ y: -3, transition: { type: 'spring', stiffness: 400 } }}
      className='group relative'
    >
      <div className='relative bg-white/60 backdrop-blur-md border border-gray-200/60 rounded-xl p-4 text-center
        group-hover:bg-white group-hover:shadow-lg group-hover:border-gray-300/80 transition-all duration-300'>
        <div className={`text-2xl font-bold bg-gradient-to-r ${gradient} text-transparent bg-clip-text mb-1`}>
          {value}
        </div>
        <div className='text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold'>
          {label}
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const { ref } = useSectionInView("About", 0.55);
  const [inView, setInView] = useState(false);

  const cmd = 'cat ~/about.md';
  const { shown: cmdText, done: cmdDone } = useTyping(cmd, 40, 300, inView);

  const stats = [
    { label: 'Role', value: 'DevOps I', gradient: 'from-blue-500 to-cyan-400' },
    { label: 'Cloud', value: 'Azure', gradient: 'from-teal-500 to-emerald-400' },
    { label: 'GPA', value: '8.05', gradient: 'from-green-500 to-emerald-400' },
    { label: 'Focus', value: 'SRE', gradient: 'from-violet-500 to-purple-400' },
  ];

  const highlights = [
    { text: 'DevOps Engineer I @ Aleph Technologies', color: 'text-teal-400' },
    { text: 'B.E. Information Technology — I²IT, Pune (2026)', color: 'text-blue-400' },
    { text: 'Ex-Trainee @ StratVeda Technologies', color: 'text-emerald-400' },
    { text: 'Ex-SDE Intern @ Skylark Labs', color: 'text-purple-400' },
  ];

  return (
    <motion.section
      ref={ref}
      className='mb-28 w-full max-w-[68rem] scroll-mt-28 sm:mb-40 relative px-4'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      {/* ── Ambient blobs ── */}
      <div className='absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-radial from-blue-500/6 via-teal-500/4 to-transparent rounded-full blur-3xl pointer-events-none' />

      <div className='text-center mb-14'>
        <SectionHeader>About me</SectionHeader>
      </div>

      {/* ── Main Grid: Terminal + Stats ── */}
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 items-start'>

        {/* ── LEFT: Terminal (3 cols) ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => setInView(true)}
          transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
          className='lg:col-span-3 relative group'
        >
          {/* Glow on hover */}
          <div className='absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-teal-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700' />

          <div className='relative bg-gray-950 rounded-2xl shadow-2xl shadow-black/30 border border-gray-800/80 overflow-hidden'>
            {/* Title bar */}
            <div className='flex items-center justify-between px-5 py-3 bg-gray-900/80 border-b border-gray-800/50'>
              <div className='flex gap-1.5'>
                <div className='w-3 h-3 rounded-full bg-red-500/80' />
                <div className='w-3 h-3 rounded-full bg-yellow-500/80' />
                <div className='w-3 h-3 rounded-full bg-green-500/80' />
              </div>
              <div className='flex items-center gap-2 text-gray-500 text-xs font-mono'>
                <BsTerminal className='text-teal-400' />
                <span>pranav@sre-workstation ~/about</span>
              </div>
              <div className='w-12' />
            </div>

            {/* Terminal body */}
            <div className='p-6 font-mono text-sm leading-relaxed min-h-[340px]'>
              {/* Command line */}
              <div className='flex items-center gap-2 mb-4'>
                <span className='text-emerald-400 font-semibold text-xs select-none'>❯</span>
                <span className='text-cyan-300'>{cmdText}</span>
                {!cmdDone && <span className='inline-block w-2 h-4 bg-cyan-400 animate-terminal-cursor' />}
              </div>

              {/* File output */}
              {cmdDone && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Highlights header */}
                  <div className='mb-4 pb-3 border-b border-gray-800/60'>
                    {highlights.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 * i }}
                        className='flex items-center gap-2 mb-1'
                      >
                        <BsCheckCircleFill className={`${h.color} text-xs flex-shrink-0`} />
                        <span className={`${h.color} text-xs`}>{h.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Main about text */}
                  <div className='text-gray-300 text-sm leading-7 space-y-4'>
                    <p>
                      <span className='text-gray-500'>{'//'} Background</span>
                      <br />
                      Currently{' '}
                      <span className='text-emerald-400 font-semibold'>DevOps Engineer I at Aleph Technologies</span>,
                      building{' '}
                      <span className='text-teal-400 font-semibold'>scalable cloud infrastructure</span>{' '}
                      and automating delivery pipelines. B.E. in Information Technology from{' '}
                      <span className='text-white font-medium'>I²IT, Pune</span>{' '}
                      <span className='text-gray-500'>(GPA: 8.05)</span>.
                    </p>

                    <p>
                      <span className='text-gray-500'>{'//'} Current</span>
                      <br />
                      At{' '}
                      <span className='text-white font-medium'>Aleph Technologies</span>:{' '}
                      working on{' '}
                      <span className='text-blue-400 font-semibold'>Microsoft Azure</span>{' '}
                      — containerized workloads on{' '}
                      <span className='text-teal-400'>AKS</span>,{' '}
                      <span className='text-teal-400'>Azure DevOps pipelines</span>,{' '}
                      <span className='text-purple-400'>observability with Azure Monitor</span>, and production
                      reliability from deploy to incident response.
                    </p>

                    <p>
                      <span className='text-gray-500'>{'//'} Previously</span>
                      <br />
                      At{' '}
                      <span className='text-white font-medium'>StratVeda Technologies</span>:{' '}
                      deployed APIs on Linux-based AWS, configured{' '}
                      <span className='text-teal-400'>Nginx reverse proxy &amp; load balancing</span>, built monitoring dashboards with{' '}
                      <span className='text-purple-400'>Prometheus &amp; Grafana</span>{' '}
                      tracking latency, uptime, and error rates. At{' '}
                      <span className='text-white font-medium'>Skylark Labs</span>:{' '}
                      integrated AI services via FastAPI, built real-time{' '}
                      <span className='text-blue-400'>WebRTC streaming</span>{' '}
                      services, deployed on Linux cloud environments.
                    </p>

                    <p>
                      <span className='text-gray-500'>{'//'} Prelexa – AI Collaboration Platform</span>
                      <br />
                      Built an{' '}
                      <span className='text-violet-400 font-semibold'>AI-powered multi-tenant platform</span>{' '}
                      with Gemini API, real-time{' '}
                      <span className='text-blue-400'>WebSocket video chat</span>,{' '}
                      <span className='text-teal-400'>RBAC</span>, and cron-based credit management.{' '}
                      Dockerized with{' '}
                      <span className='text-emerald-400 font-semibold'>CI/CD pipelines</span>,{' '}
                      deployed on Vercel + Render.
                    </p>

                    <p>
                      <span className='text-gray-500'>{'//'} Expertise</span>
                      <br />
                      <span className='text-teal-400'>Cloud &amp; Systems Engineering</span>{' '}
                      — Azure day to day, AWS from hands-on project work,{' '}
                      <span className='text-purple-400'>Monitoring &amp; Observability</span>{' '}
                      with SLI/SLO, CI/CD with GitHub Actions.
                    </p>

                    <p>
                      <span className='text-gray-500'>{'//'} Stack</span>
                      <br />
                      <span className='inline-flex flex-wrap gap-1.5 mt-1'>
                        {['Azure', 'AKS', 'Azure DevOps', 'Docker', 'Kubernetes', 'Helm', 'Prometheus', 'Grafana', 'Linux', 'Python', 'AWS'].map((t) => (
                          <span key={t} className='px-2 py-0.5 bg-gray-800/80 text-teal-300 text-xs rounded-md border border-gray-700/50'>
                            {t}
                          </span>
                        ))}
                      </span>
                    </p>
                  </div>

                  {/* Cursor at end */}
                  <div className='flex items-center gap-2 mt-5'>
                    <span className='text-emerald-400 font-semibold text-xs select-none'>❯</span>
                    <span className='inline-block w-2.5 h-5 bg-emerald-400 animate-terminal-cursor' />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT: Info Cards (2 cols) ── */}
        <div className='lg:col-span-2 flex flex-col gap-4'>
          {/* Stats Grid */}
          <div className='grid grid-cols-2 gap-3'>
            {stats.map((s, i) => (
              <StatBadge key={i} {...s} delay={0.15 + i * 0.08} />
            ))}
          </div>

          {/* Status Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 120 }}
            className='relative bg-white/60 backdrop-blur-md border border-gray-200/60 rounded-xl p-5'
          >
            <h3 className='text-xs text-gray-400 uppercase tracking-[0.2em] font-bold mb-3'>System Status</h3>
            <div className='space-y-2.5'>
              {[
                { label: 'Currently', status: 'Aleph Technologies', online: true },
                { label: 'Role', status: 'DevOps Engineer I', online: true },
                { label: 'Location', status: 'Pune, India', online: true },
                { label: 'Response Time', status: '< 24 hours', online: true },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className='flex items-center justify-between text-sm'
                >
                  <span className='text-gray-500 font-medium'>{item.label}</span>
                  <span className='flex items-center gap-1.5 text-gray-800 font-medium'>
                    <BsCircleFill className={`text-[6px] ${item.online ? 'text-emerald-500 animate-pulse' : 'text-gray-300'}`} />
                    {item.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>


        </div>
      </div>
    </motion.section>
  );
}
