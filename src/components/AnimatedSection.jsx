import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const variants = {
    'fade-up': {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
    },
    'fade-left': {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 },
    },
    'fade-right': {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0 },
    },
    'scale-in': {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
};

function AnimatedSection({
    children,
    variant = 'fade-up',
    delay = 0,
    duration = 0.6,
    className = '',
    once = true,
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: '-80px' });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={variants[variant]}
            transition={{ duration, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default AnimatedSection;
