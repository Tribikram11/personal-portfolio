import profilePic from '../assets/download.jpg';
import Skills from './Skills';
import AnimatedSection from './AnimatedSection';

function AboutMe({ isScrolled }) {
    return (
        <section className="flex justify-center px-4 sm:px-8 md:px-16 lg:px-40">
            <AnimatedSection variant="fade-up" className="w-full">
                <div
                    className={`max-w-8xl mx-auto px-4 sm:px-8 overflow-hidden
                     bg-gray-100 dark:bg-gray-900
                     rounded-xl shadow-inner shadow-neon-pink
                     flex flex-col
                     items-center space-y-8 md:space-y-0
                     border border-neon-pink
                     transition-all duration-700 ease-in-out
                     relative
                     ${isScrolled ? 'md:pl-48' : ''}
                     `}
                >
                    <img
                        src={profilePic}
                        alt="profile"
                        className={`w-24 h-24 rounded-full
                                    border-4 border-pink-500
                                    dark:shadow-[0_0_25px_theme('colors.pink.500')]
                                    absolute top-16 left-8 sm:left-16
                                    transition-all duration-700 ease-in-out
                                    ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
                                    `}
                    />

                    <div className="text-center md:text-left">
                        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Hi! I'm <span className="font-bold text-pink-500 dark:text-neon-pink">Tribikram Swain</span>, a passionate <strong>MERN Stack Developer</strong> focused on building robust, high-performance web applications. I specialize in crafting everything from complex backend architectures with Node.js, Express, and MongoDB to dynamic, highly interactive user interfaces using React.
                        </p>
                        <p className="mt-3 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Whether it's designing secure RESTful APIs, managing real-time websocket data flows, or creating pixel-perfect frontend experiences, I thrive on turning challenging architectural problems into scalable, full-stack solutions.
                        </p>
                        <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                            When I'm not immersed in code, you can find me exploring new tech, reading, or travelling.
                        </p>
                    </div>

                    <div className="py-6 w-full overflow-hidden">
                        <Skills />
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
}

export default AboutMe;