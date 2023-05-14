import Image from 'next/image';
import { motion } from "framer-motion"
import { RubberBand } from "@/animation/RubberBand";

import CodeLineOne from '../svg/CodeLineOne';

const SkillsSection = () => {

    return (
        <section className='h-screen flex items-center snap-center' id='section_02'>
            <div className='container mx-auto'>
                <div className='relative'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-6'>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { type: "spring" } }}
                                className='flex flex-col'
                            >
                                <motion.span className='text-7xl font-black flex flex-row'>
                                    {"Skills & ".split("").map((value, index) => (
                                        <RubberBand key={index}>{value === " " ? "\u00A0" : value}</RubberBand>
                                    ))}
                                </motion.span>
                                <motion.span className='text-7xl font-black flex flex-row'>
                                    {"Experiences".split("").map((value, index) => (
                                        <RubberBand key={index}><span className='text-[#eb4a4c]'>{value}</span></RubberBand>
                                    ))}
                                </motion.span>
                            </motion.div>
                            <div className='mt-7 flex flex-col gap-y-4'>
                                <p className='text-2xl font-semibold'>The main area of expertise is mobile development with React-Native framework</p>
                                <p className='text-2xl font-semibold'>HTML, CSS, JS for building small and medium web applications with React</p>
                                <p className='text-2xl font-semibold'>I also have experience with popular framework like TailwindCSS, Nextjs and others.</p>
                            </div>
                        </div>
                        <div className='col-span-6 order-last'>
                            <div className='flex flex-col'>
                                <motion.div
                                    animate={{ translateY: ["-10%", "20%"] }}
                                    transition={{ ease: "easeInOut", duration: 10, repeat: Infinity, repeatType: "reverse" }}
                                    className='flex flex-col items-center gap-y-5'>
                                    <motion.a
                                        animate={{ translateX: ["-35%", "220%"] }}
                                        transition={{ ease: "easeInOut", duration: 4, repeat: Infinity, repeatType: "reverse" }}
                                        className="-left-4 flex items-center justify-center bg-[#15131b] border border-[hsla(256,7%,97%,.08)] rounded-full p-7 w-28"
                                        href=""
                                    >
                                        <Image
                                            loading='lazy'
                                            width={128}
                                            height={128}
                                            src={require("../../../public/nextjs.png")}
                                            alt='NextJs'
                                            className='h-auto w-full' />
                                        <div className="bg-noisy pointer-events-none absolute inset-0 z-10 rounded-full"></div>
                                    </motion.a>
                                    <motion.a
                                        animate={{ translateX: ["-10%", "100%"] }}
                                        transition={{ ease: "easeInOut", duration: 3, repeat: Infinity, repeatType: "reverse" }}
                                        className="-right-26 flex items-center justify-center bg-[#15131b] border border-[hsla(256,7%,97%,.08)] rounded-full p-7 w-28"
                                        href=""
                                    >
                                        <Image
                                            loading='lazy'
                                            width={128}
                                            height={128}
                                            src={require("../../../public/redux.png")}
                                            alt='Redux Toolkit'
                                            className='h-auto w-full' />
                                        <div className="bg-noisy pointer-events-none absolute inset-0 z-10 rounded-full"></div>
                                    </motion.a>
                                    <motion.a
                                        animate={{ translateX: ["-55%", "190%"] }}
                                        transition={{ ease: "easeInOut", duration: 7, repeat: Infinity, repeatType: "reverse" }}
                                        className="-left-16 flex items-center justify-center bg-[#15131b] border border-[hsla(256,7%,97%,.08)] rounded-full p-7 w-28"
                                        href=""
                                    >
                                        <Image
                                            loading='lazy'
                                            width={128}
                                            height={128}
                                            src={require("../../../public/react.png")}
                                            alt='React | React-Native'
                                            className='h-auto w-full' />
                                        <div className="bg-noisy pointer-events-none absolute inset-0 z-10 rounded-full"></div>
                                    </motion.a>
                                    <motion.a
                                        animate={{ translateX: ["-40%", "140%"] }}
                                        transition={{ ease: "easeInOut", duration: 8, repeat: Infinity, repeatType: "reverse" }}
                                        className="-left-36 flex items-center justify-center bg-[#15131b] border border-[hsla(256,7%,97%,.08)] rounded-full p-7 w-28"
                                        href=""
                                    >
                                        <Image
                                            loading='lazy'
                                            width={128}
                                            height={128}
                                            src={require("../../../public/mongodb.png")}
                                            alt='MongoDb'
                                            className='h-auto w-full' />
                                        <div className="bg-noisy pointer-events-none absolute inset-0 z-10 rounded-full"></div>
                                    </motion.a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute -left-[25%] bottom-[19%] opacity-70 blur rotate-180'>
                <CodeLineOne />
            </div>
        </section>
    )
}

export default SkillsSection