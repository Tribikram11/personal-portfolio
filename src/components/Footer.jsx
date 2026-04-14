import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="w-full py-8 px-4
                           border-t border-gray-200 dark:border-gray-800
                           bg-gray-50 dark:bg-gray-950">
            {/* Top glow line */}
            <div className="h-px w-full max-w-4xl mx-auto mb-8
                            bg-gradient-to-r from-transparent via-pink-500 to-transparent
                            opacity-40" />

            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-500 dark:text-gray-500 text-sm">
                    © {new Date().getFullYear()} Tribikram Swain. All rights reserved.
                </p>

                <div className="flex items-center space-x-5">
                    <a href="https://www.linkedin.com/in/tribikram-swain"
                        target="_blank" rel="noopener noreferrer"
                        className="text-gray-400 hover:text-pink-500 dark:hover:text-neon-pink transition-colors">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="https://github.com/Tribikram11"
                        target="_blank" rel="noopener noreferrer"
                        className="text-gray-400 hover:text-pink-500 dark:hover:text-neon-pink transition-colors">
                        <FaGithub size={20} />
                    </a>
                    <a href="mailto:tribikramswain@gmail.com"
                        className="text-gray-400 hover:text-pink-500 dark:hover:text-neon-pink transition-colors">
                        <FaEnvelope size={20} />
                    </a>
                </div>

                <p className="text-gray-500 dark:text-gray-500 text-sm flex items-center gap-1">
                    Built with React & <FaHeart className="text-pink-500" size={12} />
                </p>
            </div>
        </footer>
    );
}

export default Footer;
