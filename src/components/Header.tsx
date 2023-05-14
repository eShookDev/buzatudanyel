import { motion, useScroll, useTransform } from "framer-motion";

type Props = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode
}

const Header = (props: Props) => {

    return (
        <motion.header
            className={props.className}
        >
            {props.children}
        </motion.header>
    )
}

export default Header;