import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
    {
        role: "Full Stack Developer",
        company: "Personal Projects & Freelance",
        period: "2025 — Present",
        description: "Building production-grade web applications with React, Node.js, MongoDB, and deploying on Vercel/Render. Implemented RBAC systems, real-time queue management with Socket.IO, and computer vision projects.",
        side: "right",
    },
    {
        role: "Web Development Learner",
        company: "Self-directed Learning",
        period: "2024 — 2025",
        description: "Mastered frontend technologies (HTML, CSS, JavaScript, React) and backend (Node.js, Express, MongoDB). Built multiple portfolio projects.",
        side: "left",
    },
    {
        role: "Computer Science Student",
        company: "University",
        period: "2022 — 2026",
        description: "Pursuing computer science with focus on data structures, algorithms, databases, and machine learning. Completed YOLOv5 traffic detection research project.",
        side: "right",
    },
];

function TimelineItem({ item, index, isInView }) {
    const isLeft = item.side === 'left';

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative flex w-full mb-12
                        ${isLeft ? 'md:justify-start' : 'md:justify-end'}
                        justify-start`}
        >
            {/* Timeline dot */}
            <div className="absolute left-[20px] md:left-1/2 w-4 h-4
                            bg-pink-500 dark:bg-neon-pink rounded-full
                            border-4 border-gray-100 dark:border-gray-900
                            transform -translate-x-1/2 z-10
                            shadow-[0_0_12px_rgba(255,0,255,0.5)]"
            />

            {/* Card */}
            <div className={`ml-12 md:ml-0 md:w-[44%]
                            ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}
                            `}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl
                                border border-gray-200 dark:border-gray-700
                                shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <span className="text-xs font-semibold text-pink-500 dark:text-neon-pink uppercase tracking-wider">
                        {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-1">
                        {item.role}
                    </h3>
                    <p className="text-sm text-blue-500 dark:text-neon-cyan font-medium mt-0.5">
                        {item.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm leading-relaxed">
                        {item.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="w-full py-16 px-4" ref={ref}>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center mb-16 text-blue-500 dark:text-neon-cyan"
            >
                EXPERIENCE
            </motion.h2>

            <div className="max-w-4xl mx-auto relative">
                {/* Animated timeline line */}
                <motion.div
                    className="timeline-line"
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    style={{ transformOrigin: 'top' }}
                />

                {experiences.map((item, index) => (
                    <TimelineItem
                        key={index}
                        item={item}
                        index={index}
                        isInView={isInView}
                    />
                ))}
            </div>
        </section>
    );
}

export default Experience;
