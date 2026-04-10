'use client'
import React from 'react'  
// { useEffect, useRef }
import SectionHeader from './section-Header'
import { projectsData } from '@/lib/data'
import Project from './project'
// import { useActiveSectionContext } from '@/context/active-section-context'
// import { useInView } from 'react-intersection-observer'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
    const { ref } = useSectionInView("Projects", 0.15);
    // const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
    // const { ref, inView } = useInView({
    //     threshold: 0.2
    // });

    // useEffect(() => {
    //     if (inView && Date.now() - timeOfLastClick > 1000) {
    //         setActiveSection('Projects');
    //     }
    // }, [inView, setActiveSection, timeOfLastClick]);
    return (
        <section ref={ref} id='projects' className='scroll-mt-28 mb-28 w-full max-w-[68rem] px-4 sm:px-2'>
            <SectionHeader ><div className='text-2xl sm:text-3xl font-sans text-gray-950'>
                CAPSTONE PROJECTS</div></SectionHeader>
            <div className='mx-auto flex w-full flex-col items-center'>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
};

