import profilePic from '../assets/download.jpg'

function Hero() {
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
             mt-4
            ">
                I'm biev, web Developer
            </p>
        </section>
    )
}

export default Hero;