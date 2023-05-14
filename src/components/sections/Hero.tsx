import React from 'react';
import Image from 'next/image';
import { Player } from "@lottiefiles/react-lottie-player";
import { motion, useInView } from "framer-motion";

import CodeLineOne from '../svg/CodeLineOne';

const HeroSection = () => {

    const [progress, setProgress] = React.useState<number>(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            progress >= 0.9 ? setProgress(0) : setProgress(prev => prev + 0.0142857);
        }, 1e3);
        return () => clearInterval(interval);
    }, [progress]);

    return (
        <motion.section
            className='flex items-center h-screen snap-start' id='section_00'>
            <div className='container mx-auto'>
                <div className='relative'>
                    <div className='grid grid-cols-12'>
                        <Image src={require("../../../public/side-dots.png")} alt='Dots' className='absolute -z-10 top-0 bottom-0 -right-[30%] m-auto rotate-90' />
                        <div className='col-span-6 self-center'>
                            <div className='[--gradient-length:10] [--gradient-interval-size:3] GradientProvider' style={{ "--gradient-progress": progress } as React.CSSProperties}>
                                <h1 className='flex flex-col font-black text-transparent bg-clip-text leading-[1.2] [--font-scale:0.100] SectionHello GradientProvider_Diagonal'>
                                    <span>Digitize</span>
                                    <span>Your Idea</span>
                                </h1>
                            </div>
                            <p className='text-xl font-semibold mt-6'>Building smart user interfaces and useful interactions <br></br>Developing rich web applications and mobile experiences</p>
                        </div>
                        <div className='col-span-6'>
                            <Player
                                autoplay
                                loop
                                src="https://assets1.lottiefiles.com/packages/lf20_w51pcehl.json"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute -left-[25%] bottom-[65%] opacity-70 blur rotate-180'>
                <CodeLineOne />
            </div>
        </motion.section>
    )

}

export default HeroSection;