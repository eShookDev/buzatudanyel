import { motion } from "framer-motion"
import { DynamicIslandSize } from "./DynamicIsland"
import Image from "next/image"

type Props = {
    size: DynamicIslandSize
}

const MusicPlayer = (props: Props) => {

    return (
        <>
            <div className="h-full" style={props.size === 'ultra' ? { display: "none " } : { display: "block" }}>
                <motion.div className="h-full justify-center grid grid-cols-6 ml-1.5">
                    <motion.div className="relative col-span-1 mx-auto my-auto overflow-hidden rounded-lg w-7 h-7">
                        <Image src={require("../../../public/coverImage.jpeg")} alt="Cover" fill />
                    </motion.div>
                    <motion.div className="col-span-4 mx-auto my-auto" />
                    <motion.div className="col-span-1 mx-auto my-auto w-7">
                    </motion.div>
                </motion.div>
            </div>
            <div className="h-full" style={props.size === 'compact' ? { display: "none" } : { display: "block" }}>
                <motion.div className="h-full">
                    <motion.div className="w-full">
                        <motion.div className="grid grid-cols-5 my-6">
                            <motion.div className="relative col-span-1 my-auto overflow-hidden rounded-2xl w-16 h-16 ml-6">
                                <Image src={require("../../../public/coverImage.jpeg")} alt="Cover" fill />
                            </motion.div>
                            <motion.div className="col-span-3 my-auto overflow-hidden text-left ml-6">
                                <motion.p className="text-sm text-gray-500 font-sans text-truncate mb-0">Danyels Buzatu was listening</motion.p>
                                <motion.h2 className="text-md text-white font-sans text-truncate whitespace-nowrap my-0">Nothing</motion.h2>
                                <motion.p className="text-sm text-gray-500 font-sans text-truncfate mb-0">by Nobody</motion.p>
                            </motion.div>
                            <div className="flex flex-row justify-end">
                                <div className='relative my-auto overflow-hidden scale-125 mr-6'></div>
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div className="grid grid-cols-5 my-2">
                        <motion.div className="block text-left">
                            <motion.p className="m-auto text-sm text-center text-gray-500 font-sans align-middle">0:00</motion.p>
                        </motion.div>
                        <motion.div className="col-span-3 my-auto">
                            <div className="relative w-full h-2 my-auto overflow-hidden bg-gray-500 rounded-full mr-6">
                                <div className='absolute w-full h-2 my-auto overflow-hidden bg-gray-500 mr-6' />
                                <div className='absolute w-24 h-2 my-auto overflow-hidden bg-white mr-6' />
                            </div>
                        </motion.div>
                        <motion.div className="block text-left align-middle">
                            <motion.p className="m-auto text-sm text-center text-gray-500 font-sans align-middle'">4:33</motion.p>
                        </motion.div>
                    </motion.div>
                    <motion.div className="grid grid-cols-5">

                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default MusicPlayer