import { AnimatePresence, motion, useWillChange } from "framer-motion"
import { useCallback, useRef } from "react"

const initialState: keyof typeof DynamicIslandSizePresets = 'default'

export type DynamicIslandSize = 'compact' | 'minimalLeading' | 'minimalTrailing' | 'default' | 'large' | 'long' | 'ultra'

type Props = React.HTMLAttributes<HTMLDivElement> & {
    state: DynamicIslandSize
    onHover?: () => void
    onLeave?: () => void
    onClick?: () => void
    children: React.ReactNode
}

const DynamicIslandSizePresets = {
    default: {
        width: 150,
        aspectRatio: 44 / 150,
        borderRadius: 22,
    },
    minimalLeading: {
        width: 52.33,
        aspectRatio: 44 / 52.33,
        borderRadius: 22,
    },
    minimalTrailing: {
        width: 52.33,
        aspectRatio: 44 / 52.33,
        borderRadius: 22,
    },
    compact: {
        width: 235,
        aspectRatio: 44 / 235,
        borderRadius: 22,
    },
    long: {
        width: 350,
        aspectRatio: 44 / 350,
        borderRadius: 22,
    },
    large: {
        width: 371,
        aspectRatio: 84 / 371,
        borderRadius: 42,
    },
    ultra: {
        width: 371,
        aspectRatio: 210 / 371,
        borderRadius: 42,
    },
}

const DynamicIsland = (props: Props) => {

    const willChange = useWillChange()
    const {
        state,
        children,
    } = props

    return (
        <div className='z-20 grid w-full h-full place-items-center'>
            <motion.div
                className='items-center justify-center w-0 h-0 mx-auto text-center text-white  bg-black hover:shadow-lg DynamicIsland'
                animate={{
                    width: DynamicIslandSizePresets[state ?? initialState].width,
                    height: DynamicIslandSizePresets[state ?? initialState].aspectRatio * DynamicIslandSizePresets[state ?? initialState].width,
                    borderRadius: DynamicIslandSizePresets[state ?? initialState].borderRadius,
                    transition: { type: 'spring', stiffness: 400, damping: 30 },
                    clipPath: `none`,
                    transitionEnd: {
                        clipPath: `url(#squircle-${state ?? initialState})`,
                    },
                }}
                style={{ willChange }}
                onClick={props.onClick}
                onHoverStart={props.onHover}
                onHoverEnd={props.onLeave}
            >
                <AnimatePresence>{children}</AnimatePresence>
            </motion.div>
        </div>
    )
}

export default DynamicIsland