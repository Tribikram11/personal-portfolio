import { useState, useRef } from 'react';

function ProjectCard({ title, description, techStack, projectURL, liveURL, gradient, emoji }) {
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: y * -10, y: x * 10 });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.2s ease-out',
            }}
            className="bg-white dark:bg-gray-800
            rounded-xl shadow-lg overflow-hidden
            hover:shadow-2xl
            border border-gray-200 dark:border-gray-700
            flex flex-col h-full"
        >
            {/* Gradient Banner */}
            <div className={`h-40 flex items-center justify-center ${gradient}`}>
                <span className="text-6xl">{emoji}</span>
            </div>

            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-blue-500 dark:text-neon-cyan mb-2">
                    {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed flex-1">
                    {description}
                </p>

                {/* Tech Tags */}
                {techStack && techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-xs font-medium rounded-full
                                           bg-gray-100 dark:bg-gray-700
                                           text-gray-700 dark:text-gray-300
                                           border border-gray-200 dark:border-gray-600"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {/* Links */}
                <div className="flex items-center space-x-4 mt-auto pt-2 border-t border-gray-100 dark:border-gray-700">
                    {projectURL && (
                        <a
                            href={projectURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-sm text-pink-500 dark:text-neon-pink hover:underline"
                        >
                            GitHub &rarr;
                        </a>
                    )}
                    {liveURL && (
                        <a
                            href={liveURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-sm text-blue-500 dark:text-neon-cyan hover:underline"
                        >
                            Live Demo &rarr;
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;