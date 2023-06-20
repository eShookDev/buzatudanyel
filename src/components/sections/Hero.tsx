import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from "framer-motion";

import { CodeLine } from '../svg';
import { useInterval } from '@/hooks';
import { Globe } from '../canvas';

const HeroSection = () => {

    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["end end", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, .45], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, .5], [1, 0.2]);
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);


    const [progress, setProgress] = useState<number>(0);

    let Gradients = ["#8e84ff", "#d499ed", "#f47b8f", "#fabfb2", "#fffad1", "#95f3d9", "#64b2ff"];
    let intervalGradient = Math.floor(Gradients.length * 2) / 1e3;

    useInterval(() => {
        if (progress >= 1) setProgress(0)
        setProgress(progress => progress + intervalGradient)
    }, 1e3);

    return (
        <motion.section
            ref={sectionRef}
            style={{ opacity }}
            className='h-screen flex items-center'>
            <div className='container mx-auto px-[var(--outer-gutter)]'>
                <div className='relative'>
                    <div className='grid grid-cols-12'>
                        <motion.div className='col-span-12 md:col-span-6 md:self-center z-10' style={{ x }}>
                            <div className='mb-6 [--gradient-length:10] [--gradient-interval-size:3] GradientProvider' style={{ "--gradient-progress": progress } as React.CSSProperties}>
                                <h1 className='flex flex-col font-black text-transparent bg-clip-text leading-[1.2] [--font-scale:0.30] sm:[--font-scale:0.130] lg:[--font-scale:0.100] SectionHello GradientProvider_Diagonal'>
                                    <span>Digitize</span>
                                    <span>Your Idea</span>
                                </h1>

                            </div>
                            <p className='leading-6 text-xl tracking-wide text-white sm:max-w-md md:max-w-lg xl:max-w-xl'>Building smart user interfaces and useful interactions for web applications and mobile.</p>
                        </motion.div>
                        <motion.div className='absolute md:relative col-span-12 md:col-span-6' style={{ scale }}>
                            <div className='relative'>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { type: "spring" } }}
                                >
                                    <Globe
                                        className='w-[600px] h-[600px] opacity-50 sm:opacity-100'
                                        width={600}
                                        height={600} />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, left: -800 }}
                animate={{ opacity: 1, left: -600, transition: { type: "spring" } }}
                style={{ opacity }}
                className='hidden md:block absolute top-[calc(100vh*0.57)] opacity-70 blur rotate-180'
            >
                <CodeLine />
            </motion.div>
        </motion.section>
    )

}

export default HeroSection;