import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Socials() {
    return (
        <nav className="
      absolute bottom-8 left-8   
      flex flex-col space-y-6  
      z-50                      
    ">
            <a href="https://www.linkedin.com/in/tribikram-swain"
                className='text-gray-700 dark:text-gray-300
                        hover:text-neon-pink
                        transition-colors'
            >
                <FaLinkedin size={28} />
            </a>
            <a
                href="https://github.com/Tribikram11" 
                className="
                hover:text-neon-pink
                text-gray-700 dark:text-gray-300
                transition-colors
                "
            >
                <FaGithub size={28} />
            </a>

            <a
                href="#" 
                className="
                hover:text-neon-pink
                text-gray-700 dark:text-gray-300
                transition-colors
                "
            >
                <FaEnvelope size={28} />
            </a>
        </nav>

    )
}

export default Socials;