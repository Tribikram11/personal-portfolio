import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

const myProjects = [
    {
        title: "RBAC Inventory System",
        description: "A full-stack Inventory Management System with Role-Based Access Control (RBAC), JWT authentication, secure API access, and production deployment on Vercel + Render.",
        techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Axios"],
        gradient: "bg-gradient-to-br from-violet-600 to-indigo-700",
        emoji: "🔐",
        projectURL: "https://github.com/Tribikram11",
        liveURL: "https://rbac-inventory-system.vercel.app/login"
    },
    {
        title: "Real-Time Queue Load Balancer",
        description: "A real-time customer queue management system that auto-assigns users to agents using a FIFO queue, with live wait-time predictions and an admin dashboard powered by Socket.IO.",
        techStack: ["React", "Node.js", "Express", "Socket.IO", "MongoDB", "Vite"],
        gradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
        emoji: "⚡",
        projectURL: "https://github.com/Tribikram11/real-time-queue-load-balancer",
        liveURL: null
    },
    {
        title: "Backend Auth System",
        description: "A server-side authentication system with user registration, login, JWT tokens, password hashing with bcrypt, and cookie-based session management using EJS views.",
        techStack: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt", "EJS"],
        gradient: "bg-gradient-to-br from-green-500 to-emerald-700",
        emoji: "🛡️",
        projectURL: "https://github.com/Tribikram11",
        liveURL: null
    },
    {
        title: "Traffic Detection — YOLOv5",
        description: "A computer vision project using YOLOv5 for real-time traffic object detection and tracking on Indian driving datasets, with custom-trained models and video analysis.",
        techStack: ["Python", "YOLOv5", "PyTorch", "OpenCV", "SORT"],
        gradient: "bg-gradient-to-br from-red-500 to-orange-600",
        emoji: "🚗",
        projectURL: "https://github.com/Tribikram11",
        liveURL: null
    },
    {
        title: "Job Cards",
        description: "A React component showcase that renders dynamic company cards with interactive UI, displaying data for top tech companies with a clean card-based layout.",
        techStack: ["React", "Vite", "JavaScript", "Lucide Icons"],
        gradient: "bg-gradient-to-br from-amber-400 to-yellow-600",
        emoji: "💼",
        projectURL: "https://github.com/Tribikram11",
        liveURL: null
    },
    {
        title: "Portfolio Website (CSS)",
        description: "A responsive portfolio website built with vanilla HTML, CSS, and JavaScript — featuring a hero section, skills grid, project showcase, and responsive design.",
        techStack: ["HTML", "CSS", "JavaScript"],
        gradient: "bg-gradient-to-br from-pink-500 to-rose-600",
        emoji: "🎨",
        projectURL: "https://github.com/Tribikram11",
        liveURL: null
    },
    {
        title: "Single Page CV",
        description: "A clean, single-page CV/resume built with semantic HTML and CSS, deployed on GitHub Pages for easy sharing and accessibility.",
        techStack: ["HTML", "CSS"],
        gradient: "bg-gradient-to-br from-teal-400 to-cyan-600",
        emoji: "📄",
        projectURL: "https://github.com/Tribikram11/single-page-cv",
        liveURL: "https://tribikram11.github.io/single-page-cv/"
    },
    {
        title: "Personal Portfolio (This Site)",
        description: "My current portfolio built with React and Tailwind CSS, featuring 3D animations, neon-glow dark theme, smooth scrolling, and interactive skill cards.",
        techStack: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
        gradient: "bg-gradient-to-br from-fuchsia-500 to-purple-700",
        emoji: "🚀",
        projectURL: "https://github.com/Tribikram11",
        liveURL: null
    }
];

// Compute the transform for each card position relative to the active center
function getCardStyle(offset) {
    // offset: 0 = center, -1 = left, +1 = right, -2 = far left, etc.
    const absOffset = Math.abs(offset);

    if (absOffset > 2) {
        return { opacity: 0, scale: 0.7, x: offset * 300, rotateY: 0, zIndex: 0, display: 'none' };
    }

    return {
        x: offset * 320,
        scale: absOffset === 0 ? 1.08 : absOffset === 1 ? 0.85 : 0.7,
        rotateY: offset * -8,
        opacity: absOffset === 0 ? 1 : absOffset === 1 ? 0.6 : 0.3,
        zIndex: 10 - absOffset,
    };
}

function Projects() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
    const [activeIndex, setActiveIndex] = useState(0);

    const goTo = (index) => {
        if (index < 0) index = myProjects.length - 1;
        if (index >= myProjects.length) index = 0;
        setActiveIndex(index);
    };

    return (
        <section className="w-full py-16 overflow-x-clip" ref={sectionRef}>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center mb-2 text-blue-500 dark:text-neon-cyan"
            >
                MY PROJECTS
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center text-gray-500 dark:text-gray-400 text-sm mb-2"
            >
                {activeIndex + 1} / {myProjects.length}
            </motion.p>

            {/* Carousel Container */}
            <div className="relative flex items-center justify-center"
                 style={{ perspective: '1200px', height: '540px' }}
            >
                {/* Left Arrow */}
                <button
                    onClick={() => goTo(activeIndex - 1)}
                    className="absolute left-4 sm:left-8 z-20
                               p-3 rounded-full
                               bg-white/80 dark:bg-gray-800/80
                               backdrop-blur-md
                               border border-gray-200 dark:border-gray-700
                               text-gray-700 dark:text-gray-200
                               hover:bg-pink-50 dark:hover:bg-gray-700
                               hover:border-pink-300 dark:hover:border-neon-pink
                               hover:text-pink-500 dark:hover:text-neon-pink
                               transition-all duration-200
                               shadow-lg"
                    aria-label="Previous project"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Cards */}
                <div className="relative w-[380px] sm:w-[400px] h-[480px]"
                     style={{ transformStyle: 'preserve-3d' }}
                >
                    {myProjects.map((project, index) => {
                        const offset = index - activeIndex;
                        const style = getCardStyle(offset);

                        if (Math.abs(offset) > 2) return null;

                        return (
                            <motion.div
                                key={project.title}
                                className="absolute top-0 left-0 w-full cursor-pointer"
                                animate={{
                                    x: style.x,
                                    scale: style.scale,
                                    rotateY: style.rotateY,
                                    opacity: style.opacity,
                                    zIndex: style.zIndex,
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 260,
                                    damping: 26,
                                }}
                                onClick={() => setActiveIndex(index)}
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    techStack={project.techStack}
                                    projectURL={project.projectURL}
                                    liveURL={project.liveURL}
                                    gradient={project.gradient}
                                    emoji={project.emoji}
                                />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => goTo(activeIndex + 1)}
                    className="absolute right-4 sm:right-8 z-20
                               p-3 rounded-full
                               bg-white/80 dark:bg-gray-800/80
                               backdrop-blur-md
                               border border-gray-200 dark:border-gray-700
                               text-gray-700 dark:text-gray-200
                               hover:bg-pink-50 dark:hover:bg-gray-700
                               hover:border-pink-300 dark:hover:border-neon-pink
                               hover:text-pink-500 dark:hover:text-neon-pink
                               transition-all duration-200
                               shadow-lg"
                    aria-label="Next project"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center mt-8 gap-2">
                {myProjects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            index === activeIndex
                                ? 'w-8 bg-pink-500 dark:bg-neon-pink shadow-[0_0_8px_rgba(255,0,255,0.5)]'
                                : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to project ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;