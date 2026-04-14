import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/download.jpg';
import HeroScene from './HeroScene';

const words = ['web developer', 'coder', 'Traveller'];

function Hero({ isScrolled }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const value = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);
        return () => {
            clearInterval(value);
        };
    }, []);

    return (
        <section className="relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden">
            {/* 3D Background */}
            <HeroScene />

            {/* Content overlay */}
            <div className="relative z-10 flex flex-col items-center">
                <motion.img
                    src={profilePic}
                    alt="Tribikram Swain"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: isScrolled ? 0 : 1,
                        scale: isScrolled ? 0.5 : 1,
                    }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    className="w-40 h-40 mb-8 rounded-full border-4
                               border-white dark:border-pink-500

                               dark:shadow-[0_0_25px_theme('colors.pink.500')]"
                />

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-black text-5xl sm:text-6xl text-blue-500 neon-text-cyan"
                >
                    Hello World!
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-xl font-medium text-gray-600 dark:text-gray-300
                               mt-4 flex items-center justify-center space-x-2"
                >
                    <span>I'm Tribikram Swain, a</span>
                    <span className="h-7 overflow-hidden">
                        <span
                            className="flex flex-col transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateY(-${currentIndex * 1.75}rem)` }}
                        >
                            {words.map((word, index) => (
                                <span
                                    key={index}
                                    className="h-7 flex items-center font-bold text-pink-500 dark:text-neon-pink"
                                >
                                    {word}
                                </span>
                            ))}
                        </span>
                    </span>
                </motion.p>
            </div>

            {/* Scroll down indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 z-10 scroll-indicator"
            >
                <div className="flex flex-col items-center text-gray-400 dark:text-gray-500">
                    <span className="text-xs mb-2 tracking-widest uppercase">Scroll</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                    </svg>
                </div>
            </motion.div>
        </section>
    );
}

export default Hero;