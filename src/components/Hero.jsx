import { useEffect, useState } from 'react';
import profilePic from '../assets/download.jpg'

const words = ['web developer', 'coder', 'Traveler']


function Hero() {

    const[currentIndex, setCurrentIndex] = useState(0);

      useEffect(() => {
        const value = setInterval(() => {
            // words.map((word) => (
            //     setCurrentIndex(prev => prev + 1)
            // ))
            // if(currentIndex == 2){
            //     setCurrentIndex(0)
            // }
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
        }, 2000);
        return () => {
            clearInterval(value)
        }
    },[])



    return (
        <section className="
        flex flex-col items-center justify-center
        text-center min-h-screen 
        z-10
        ">
            <img src={profilePic} alt="picture" 
                className="
                w-40 h-40 
                rounded-full 
                mb-8
                border-4 border-white
                dark:border-pink-500
                dark:shadow-[0_0_25px_theme('colors.pink.500')]
                transition-all duration-500
            "/>
            <h1 className="
            font-black text-6xl 
            text-blue-500 
            neon-text-cyan
            ">
                Hello World!
            </h1>

            <p className="
            text-xl font-medium
            text-gray-600 dark:text-gray-300
             mt-4 flex items-center justify-center space-x-2
            " >
                {/* this part always stay */}
                <span >
                    I'm Tribikram Swain, a
                </span>
                {/* scrolling part */}
                <span className='h-7 overflow-hidden'>
                  <span className='flex flex-col
                                    transition-transform duration-700 ease-in-out'
                        style={{ transform: `translateY(-${currentIndex * 1.75}rem)` }}>
                    {words.map((word, index) => 
                    <span key={index} 
                            className="h-7 flex items-center 
                                    font-bold text-pink-500 dark:text-neon-pink 
                    ">
                        {word}</span>
                    )}
                  </span>
                </span>
                
            </p>
        </section>
    )
}

export default Hero;