import { 
  FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython
} from 'react-icons/fa';
import { SiPostgresql, SiTypescript , SiMysql} from 'react-icons/si';
import SkillCard from './SkillCard';

const mySkills = [{
    category: "Languages & Tools",
    icon: <FaJs />,
    skills:[
      { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
      { name: "Python", icon: <FaPython />, color: "text-blue-600" },
      { name: "MySQL", icon: <SiMysql />, color: "text-indigo-500" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-[#336791]" },
      { name: "Typescript", icon: <SiTypescript />, color: "text-[#336791]" },
    ]
}]
// Predefined random-looking thread lengths for each skill
const threadLengths = [55, 35, 70, 45, 60, 38, 72, 50];

function Skills(){
    return (
        <>
            <h2 className='text-4xl font-bold text-center mb-4
                            text-blue-500 dark:text-neon-cyan
            '>
                SKILLS
            </h2>

            {mySkills.map((categoryData, index) => (
                <div key={index} className="w-full">
                    {/* Single row of hanging icons */}
                    <div className="
                      flex items-start justify-center
                      gap-8 sm:gap-10 md:gap-14
                      pt-20 pb-6
                      flex-wrap
                    ">
                        {categoryData.skills.map((skill, skillIndex) => (
                            <SkillCard
                                key={skillIndex}
                                icon={skill.icon}
                                color={skill.color}
                                delay={skillIndex * 0.4}
                                threadLength={threadLengths[skillIndex % threadLengths.length]}
                            />
                        ))}
                    </div>
                </div>
            ))}
           </>  
    )
}

export default Skills;