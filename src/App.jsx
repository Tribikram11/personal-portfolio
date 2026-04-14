import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Socials from "./components/Socials";
import AboutMe from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const experienceRef = useRef(null);
    const contactRef = useRef(null);

    // Bundle refs into an object for the Header
    const refs = { aboutRef, projectRef, experienceRef, contactRef };

    useEffect(() => {
        const scrolling = () => {
            setIsScrolled(window.scrollY > 500);
        };
        window.addEventListener('scroll', scrolling);
        return () => window.removeEventListener('scroll', scrolling);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className={`relative w-full transition-colors duration-500
            ${darkMode ? 'bg-grid-dark bg-gray-900' : 'bg-grid-light bg-gray-100'}
        `}>
            <CursorGlow isDarkMode={darkMode} />

            <Header
                isDarkMode={darkMode}
                setIsDarkMode={setDarkMode}
                refs={refs}
            />

            <Hero isScrolled={isScrolled} />

            <Socials />

            <div ref={aboutRef}>
                <AboutMe isScrolled={isScrolled} />
            </div>

            <div ref={projectRef}>
                <Projects />
            </div>

            <div ref={experienceRef}>
                <Experience />
            </div>

            <div ref={contactRef}>
                <Contact />
            </div>

            <Footer />
        </div>
    );
}

export default App;