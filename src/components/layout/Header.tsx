import { motion, useScroll, useTransform } from "framer-motion";

type Props = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode
}

const Header = (props: Props) => {

    return (
        <motion.header
            className={props.className}
        >
            <div className="container mx-auto max-w-screen-xl">
                <div className="relative">
                {props.children}
                </div>
            </div>
        </motion.header>
    )
}

export default Header;