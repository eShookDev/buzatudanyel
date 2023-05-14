import { RubberBand } from "@/animation/RubberBand"
import { motion } from "framer-motion"
import CodeLineOne from "../svg/CodeLineOne"

const AboutSection = () => {

    return (
        <section className='h-screen flex items-center snap-center' id='section_01'>
            <div className='container mx-auto'>
                <div className='relative'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-6 self-center'>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { type: "spring" } }}
                                className='flex flex-col'
                            >
                                <motion.span className='text-7xl font-black flex flex-row'>
                                    {"Hello & ".split("").map((value, index) => (
                                        <RubberBand key={index}>{value === " " ? "\u00A0" : value}</RubberBand>
                                    ))}
                                </motion.span>
                                <motion.span className='text-7xl font-black flex flex-row'>
                                    {"Danyel Buzatu".split("").map((value, index) => (
                                        <RubberBand key={index}><span className='text-[#eb4a4c]'>{value === " " ? "\u00A0" : value}</span></RubberBand>
                                    ))}
                                </motion.span>
                            </motion.div>
                            <div className='mt-7'>
                                <p className='text-2xl font-semibold'>Passionate developer from Italy. <br></br>Who loves to build and delivery quality products</p>
                            </div>
                        </div>
                        <div className='col-span-6'>
                            <div className='relative'>
                                <div className='grid grid-rows-4 grid-cols-10 gap-4 flex-none'>
                                    <div className='relative col-[1] row-[1] aspect-square'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[1] row-[2] aspect-square'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[1] row-[3] aspect-square'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[1] row-[4] aspect-square'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[1] row-[4] aspect-square'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[2] row-start-[1] row-end-[5] z-10'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-start-[2] col-end-[4] row-[1]'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-start-[2] col-end-[4] row-[4]'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[3] row-[2] aspect-square'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[3] row-[3] aspect-square'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[4] row-[1] aspect-square'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[4] row-start-[2] row-end-[4]'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[4] row-[4] aspect-square'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white ' />
                                    </div>
                                    <div className='relative col-[5] row-[1] aspect-square'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[5] row-[2] aspect-square'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[5] row-[3] aspect-square'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[5] row-[4] aspect-square'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[6] row-start-[1] row-end-[5]'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-start-[7] col-end-[9] row-[1]'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-start-[7] col-end-[9] row-[2]'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-start-[7] col-end-[9] row-[4]'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[7] row-[3] aspect-square'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[8] row-[3] aspect-square'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[9] row-[1] aspect-square'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[9] row-[2] aspect-square'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[9] row-[3] aspect-square'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[9] row-[4] aspect-square'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[10] row-[1] aspect-square'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[10] row-[2] aspect-square'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[10] row-[3] aspect-square'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                    <div className='relative col-[10] row-[4] aspect-square'>
                                        <div className='absolute inset-0 rounded-full overflow-hidden bg-[#8492ff] hover:bg-white' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-[49%] right-[20%] opacity-70 blur'>
                <CodeLineOne />
            </div>
            <div className='absolute bottom-[43%] right-0 opacity-70 rotate-180 blur'>
                <CodeLineOne />
            </div>
        </section>
    )
}

export default AboutSection