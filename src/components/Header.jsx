import Toggle from "./Toggle"
import SolidButton from "./SolidButton";

function Header({ isDarkMode, setIsDarkMode, aboutRef , projectRef}) {
    const handleToggle = () => {
        setIsDarkMode(!isDarkMode)
    }

    const handleScrollTo = (ref) => {
        if(ref.current){
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block:'start'
            });
        }
    }

    return (
        <header className="
        absolute top-8 right-8 /* Position it in the corner */
        flex items-center space-x-6 /* Lay out its children (Toggle, links, Button) */
         z-50 /* Make sure it's on top of other content */
         ">
            <Toggle isCheck={isDarkMode} onChange={handleToggle} />
            <a href="#about" className="font-medium text-gray-600 dark:text-gray-300"
                onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(aboutRef)
                }}>
                About Me
            </a>
            <a href="#projects" className="font-medium text-gray-600 dark:text-gray-300"
                onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(projectRef)
                }}
            >
                Projects
            </a>

            {/* 6. The Solid Button */}
            <SolidButton>Resume</SolidButton>

        </header>
    )

}

export default Header;