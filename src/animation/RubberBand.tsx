import React from "react"
import { motion, useAnimationControls } from "framer-motion"

interface IAnimation {
    children: React.ReactNode
}

export const RubberBand = (props: IAnimation) => {

    const controls = useAnimationControls()

    const [isPlaying, setIsPlaying] = React.useState<boolean>(false)

    const Animation = () => {
        controls.start({
            transform: [
                "scale3d(1, 1, 1)",
                "scale3d(1.25, 0.75, 1)",
                "scale3d(0.75, 1.25, 1)",
                "scale3d(1.15, 0.85, 1)",
                "scale3d(0.95, 1.05, 1)",
                "scale3d(1.05, 0.95, 1)",
                "scale3d(1, 1, 1)"
            ],
            transition: {
                times: [0, .4, .6, .7, .8, .9]
            }
        })

        setIsPlaying(true)
    }

    return (
        <motion.div
            animate={controls}
            onMouseOver={() => !isPlaying && Animation()}
            onAnimationComplete={() => setIsPlaying(false)}
        >
            {props.children}
        </motion.div>
    )
}