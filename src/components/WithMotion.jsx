import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

export default function WithMotion({ children, object, className, id }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start(object.animate);
        }
    }, [controls, inView, object.animate]);

    return (
        <motion.div
            {...object}
            animate={controls}
            ref={ref}
            className={className}
            id={id}
        >
            {children}
        </motion.div>
    );
}