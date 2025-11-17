import profilePic from '../assets/download.jpg'
import Skills from './Skills';

function AboutMe({isScrolled}) {
    return (
        <section className="flex justify-center px-40 ">
        <div
            className={`max-w-8xl mx-auto px-8
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
                <img src={profilePic} alt="profile" 
                    className={`w-24 h-24 rounded-full
                                border-4 border-pink-500
                                dark:shadow-[0_0_25px_theme('colors.pink.500')]
                                absolute top-16 left-8 sm:left-16
                                transition-all duration-700 ease-in-out
            
                                ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
                                `}/>
            {/* --- 6. Right Side: Description --- */}
            <div className="text-center md:text-left">
                
                <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                    Hi! I'm Tribikram Swain, a passionate web developer with a love for
                    building clean, intuitive, and dynamic user interfaces.
                    I enjoy turning complex problems into beautiful, simple designs.
                </p>
                <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
                    When I'm not coding, you can find me exploring new tech, reading, or traveling.
                </p>
            </div>

            <div className='py-6'><Skills/></div>
        </div>
        </section>
    )
}

export default AboutMe;