import { RubberBand } from "@/animation/RubberBand"
import { motion } from "framer-motion"
import CodeLineOne from "../svg/CodeLineOne"
import React from "react"
import createGlobe from "cobe"

const AboutSection = () => {

    return (
        <section className='h-screen flex items-center snap-center' id='section_01'>
            <div className='container mx-auto px-[var(--outer-gutter)]'>
                <div className='relative'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 md:col-span-6 md:self-center'>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { type: "spring" } }}
                                className='flex flex-col'
                            >
                                <motion.span className='text-4xl md:text-7xl font-black text-white flex flex-row'>
                                    {"Hello & ".split("").map((value, index) => (
                                        <RubberBand key={index}>{value === " " ? "\u00A0" : value}</RubberBand>
                                    ))}
                                </motion.span>
                                <motion.span className='text-5xl md:text-7xl font-black flex flex-row'>
                                    {"Danyel Buzatu".split("").map((value, index) => (
                                        <RubberBand key={index}><span className='text-[#eb4a4c]'>{value === " " ? "\u00A0" : value}</span></RubberBand>
                                    ))}
                                </motion.span>
                            </motion.div>
                            <p className="mt-7 leading-6 text-lg tracking-wide sm:max-w-md md:max-w-lg xl:max-w-xl text-[#959499]">
                                My name is Buzatu Marius Daniel, passionate mobile & web developer based in Arezzo, Italy. I have developed many types products from well or collaborating with dev agency.
                            </p>
                        </div>
                        <div className='col-span-6'>
                            <div className='relative'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden sm:absolute bottom-[43%] right-0 opacity-70 rotate-180 blur'>
                <CodeLineOne />
            </div>
        </section>
    )
}

export default AboutSection