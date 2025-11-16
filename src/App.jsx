import { useEffect, useRef, useState } from "react"
import Header from "./components/Header";
import Hero from "./components/Hero";
import Socials from "./components/Socials";
import AboutMe from "./components/About";
import Projects from "./components/Projects";

function App() {
    const[darkMode, setDarkMode] = useState(true);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);

    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
    },[darkMode])


  return (
    <div className={`relative
      w-full 
      transition-colors duration-500
      ${darkMode ? 'bg-grid-dark bg-gray-900' : 'bg-grid-light bg-gray-100'}
    `}>
        <Header
        isDarkMode={darkMode}
        setIsDarkMode={setDarkMode}
        aboutRef={aboutRef}
        projectRef={projectRef}
        />

        <Hero/>

        <Socials/>
        <div ref={aboutRef}>
          <AboutMe/>
        </div>
        <div ref={projectRef}>
          <Projects/>
        </div>
        
    </div>
  )
}

export default App