import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Toggle from './toggle';
import SolidButton from './solidbutton';

const navLinks = [
    { label: 'About', key: 'aboutRef' },
    { label: 'Projects', key: 'projectRef' },
    { label: 'Experience', key: 'experienceRef' },
    { label: 'Contact', key: 'contactRef' },
];

function Header({ isDarkMode, setIsDarkMode, refs }) {
    const [isSticky, setIsSticky] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const onScroll = () => {
            setIsSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleScrollTo = (key) => {
        const ref = refs[key];
        if (ref && ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        setMobileOpen(false);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50
                    flex items-center justify-between
                    px-6 sm:px-10 py-3
                    transition-all duration-500
                    ${isSticky
                        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-700/50'
                        : 'bg-transparent'
                    }`}
            >
                {/* Logo */}
                <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="text-xl font-bold text-gray-800 dark:text-white
                               hover:text-pink-500 dark:hover:text-neon-pink transition-colors">
                    TS<span className="text-pink-500 dark:text-neon-pink">.</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <button
                            key={link.key}
                            onClick={() => handleScrollTo(link.key)}
                            className="font-medium text-gray-600 dark:text-gray-300
                                       hover:text-pink-500 dark:hover:text-neon-pink
                                       transition-colors text-sm"
                        >
                            {link.label}
                        </button>
                    ))}
                    <Toggle isCheck={isDarkMode} onChange={handleToggle} />
                    <SolidButton>Resume</SolidButton>
                </nav>

                {/* Mobile — toggle + hamburger */}
                <div className="flex md:hidden items-center space-x-3">
                    <Toggle isCheck={isDarkMode} onChange={handleToggle} />
                    <button onClick={() => setMobileOpen(!mobileOpen)}
                        className="text-gray-600 dark:text-gray-300 p-1">
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 pt-20 px-6
                                   bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl
                                   flex flex-col items-center space-y-6"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.key}
                                onClick={() => handleScrollTo(link.key)}
                                className="text-xl font-semibold text-gray-700 dark:text-gray-200
                                           hover:text-pink-500 dark:hover:text-neon-pink
                                           transition-colors"
                            >
                                {link.label}
                            </button>
                        ))}
                        <SolidButton>Resume</SolidButton>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Header;