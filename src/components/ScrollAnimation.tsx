import React, { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollAnimationProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
                                                             children,
                                                             delay = 0,
                                                             duration = 0.6,
                                                             className = '',
                                                         }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    const variants = {
        hidden: {
            opacity: 0,
            y: 30,
            filter: 'blur(10px)',
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration,
                delay,
                ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimation;