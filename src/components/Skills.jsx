import { 
  FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaDatabase
} from 'react-icons/fa';
import { SiCanva } from 'react-icons/si';
import SkillCard from './SkillCard';

// 1. Corrected typo from "mySkils" to "mySkills"
const mySkills = [{
    category: "programming languages",
    icon: "💻",
    skills:[
      { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
      { name: "Python", icon: <FaPython />, color: "text-blue-600" },
      { name: "MySQL", icon: <FaDatabase />, color: "text-indigo-500" },
    ]
}]

function Skills(){

    console.log("skill got rendered")
    return (
        <>
            <h2 className='text-4xl font-bold text-center mb-16
                            text-blue-500 dark:text-neon-cyan
            '>
                SKILLS
            </h2>

            {/* 2. Using the corrected variable name "mySkills" */}
            {mySkills.map((categoryData, index) => (
                <div key={index} className="mb-12 last:mb-0 w-full">
                    <h3 className="
                      text-2xl font-semibold mb-6 flex items-center space-x-3
                      text-gray-800 dark:text-gray-200
                      border-b border-gray-300 dark:border-gray-700 pb-3
                    ">
                        <span className='text-3xl'>{categoryData.icon}</span>
                        <span>{categoryData.category}</span>
                    </h3>
                    
                    <div className="
                      grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7
                      gap-6
                    ">
                        {categoryData.skills.map((skill, skillIndex) => (
                            <SkillCard
                                key={skillIndex}
                                name={skill.name}
                                icon={skill.icon}
                                color={skill.color}
                            />
                        ))}
                    </div>
                </div>
            ))}
           </> 
    )
}

export default Skills;