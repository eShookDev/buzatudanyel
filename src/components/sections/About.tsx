import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { RubberBand } from "@/animation/RubberBand"
import { CodeLine } from "../svg"

import dynamic from "next/dynamic"

const FaceLandmarkerCanvas = dynamic(() => { return import("../facelandmarker/FaceLandmarker") }, { ssr: false })

const AboutSection = () => {

    const sectionRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0.2, 0.3, .5, .6], [0, 1, 1, 0]);
    const x = useTransform(scrollYProgress, [0, 0.4], ["-100%", "0%"]);
    const y = useTransform(scrollYProgress, [0, 0.7], ["0%", "-10%"]);
    const scale = useTransform(scrollYProgress, [0, .4], [0, 1]);

    return (
        <motion.section
            ref={sectionRef}
            style={{ opacity }}
            className='flex items-center'>
            <div className='container mx-auto px-[var(--outer-gutter)]'>
                <div className='relative'>
                    <div className='grid grid-cols-12'>
                        <motion.div className='col-span-12 md:col-span-6 md:self-center' style={{ x, scale }}>
                            <div className='flex flex-col'>
                                <span className='text-4xl md:text-7xl font-black text-white flex flex-row'>
                                    {"Hello & ".split("").map((value, index) => (
                                        <RubberBand key={index}>{value === " " ? "\u00A0" : value}</RubberBand>
                                    ))}
                                </span>
                                <span className='text-5xl md:text-7xl font-black flex flex-row'>
                                    {"Danyel Buzatu".split("").map((value, index) => (
                                        <RubberBand key={index}><span className='text-[#eb4a4c]'>{value === " " ? "\u00A0" : value}</span></RubberBand>
                                    ))}
                                </span>
                            </div>
                            <p className="mt-7 leading-6 text-lg tracking-wide sm:max-w-md md:max-w-lg xl:max-w-xl text-[#959499]">
                                My name is Buzatu Marius Daniel, passionate mobile & web developer based in Arezzo, Italy. I have developed many types products from well or collaborating with dev agency.
                            </p>
                        </motion.div>
                        <motion.div className='col-span-6' style={{ y }}>
                            <div className='relative'>
                                <FaceLandmarkerCanvas />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className='hidden sm:absolute bottom-[43%] right-0 opacity-70 rotate-180 blur'>
                <CodeLine />
            </div>
        </motion.section>
    )
}

export default AboutSection