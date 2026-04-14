function SkillCard({ icon, color, delay = 0, threadLength = 40 }) {
    return (
        <div
            className="skill-swing skill-thread relative flex items-start justify-center"
            style={{
                '--swing-delay': `${delay}s`,
                '--thread-length': `${threadLength}px`,
            }}
        >
            {/* --- Just the icon, no box --- */}
            <div className={`
                text-5xl z-10 cursor-pointer
                transition-transform duration-300 ease-out
                hover:scale-125
                drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]
                ${color}
            `}>
                {icon}
            </div>
        </div>
    )
}

export default SkillCard;