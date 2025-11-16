function SkillCard({ name, icon, color }) {
    return (
        <div className="
        relative group
        w-28 h-28 p-4
        flex flex-col items-center justify-center
        rounded-xl border border-gray-200 dark:border-gray-700
        overflow-hidden
        bg-gray-100 dark:bg-gray-800
        transition-all duration-500 ease-out
        hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
        ">
            {/* --- mirror tint overlay --- */}
            <div className="
                absolute inset-0
                bg-gradient-to-tr from-white/10 via-white/5 to-transparent
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500 ease-out
                pointer-events-none
            "></div>

            {/* --- subtle reflective streak --- */}
            <div className="
                absolute -top-1/2 -left-1/2 w-[200%] h-[200%]
                bg-gradient-to-tr from-transparent via-white/15 to-transparent
                rotate-12
                translate-x-[-100%]
                group-hover:translate-x-[100%]
                transition-transform duration-[1200ms] ease-out
                pointer-events-none
            "></div>

            {/* --- Icon --- */}
            <div className={`
                text-4xl mb-2 z-10
                transition-transform duration-300 ease-out
                group-hover:scale-110 ${color}
            `}>
                {icon}
            </div>

            {/* --- Skill Name --- */}
            <p className="
                text-sm font-semibold z-10
                text-gray-700 dark:text-gray-300
                transition-colors duration-300 ease-out
                group-hover:text-black dark:group-hover:text-white
            ">
                {name}
            </p>
        </div>

    )
}

export default SkillCard;