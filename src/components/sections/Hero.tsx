import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

import { CodeLine } from '../svg';
import { useInterval } from '@/hooks';
import { Globe } from '../canvas';

const HeroSection = () => {

    const [progress, setProgress] = useState<number>(0);

    let Gradients = ["#8e84ff", "#d499ed", "#f47b8f", "#fabfb2", "#fffad1", "#95f3d9", "#64b2ff"]
    let intervalGradient = Math.floor(Gradients.length * 2) / 1e3

    useInterval(() => {
        if (progress >= 1) setProgress(0)
        setProgress(progress => progress + intervalGradient)
    }, 1e3)

    return (
        <motion.section
            className='h-screen flex items-center' id='hero'>
            <div className='container mx-auto px-[var(--outer-gutter)]'>
                <div className='relative'>
                    <div className='grid grid-cols-12'>
                        <Image
                            src={require("../../../public/side-dots.png")}
                            alt='Dots' className='hidden xl:block absolute top-0 bottom-0 -right-[calc(100%_/_2)] m-auto rotate-90'
                        />
                        <div className='col-span-12 md:col-span-6 md:self-center z-10'>
                            <div className='mb-6 [--gradient-length:10] [--gradient-interval-size:3] GradientProvider' style={{ "--gradient-progress": progress } as React.CSSProperties}>
                                <motion.h1
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { type: "spring" } }}
                                    className='flex flex-col font-black text-transparent bg-clip-text leading-[1.2] [--font-scale:0.30] sm:[--font-scale:0.130] lg:[--font-scale:0.100] SectionHello GradientProvider_Diagonal'
                                >
                                    <span>Digitize</span>
                                    <span>Your Idea</span>
                                </motion.h1>

                            </div>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { type: "spring" } }}
                                className='leading-6 text-xl tracking-wide text-white sm:max-w-md md:max-w-lg xl:max-w-xl'>Building smart user interfaces and useful interactions for web applications and mobile.
                            </motion.p>
                        </div>
                        <div className='absolute md:relative col-span-12 md:col-span-6'>
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
                        </div>
                    </div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, left: -800 }}
                animate={{ opacity: 1, left: -600, transition: { type: "spring" } }}
                className='hidden md:block absolute top-[calc(100vh*0.57)] opacity-70 blur rotate-180'
            >
                <CodeLine />
            </motion.div>
        </motion.section>
    )

}

export default HeroSection;