function ProjectCard({ title, description, imageURL, projectURL }) {
    return (
        <div className="bg-white dark:bg-gray-800
        rounded-lg shadow-lg overflow-hidden
        transition-transform duration-300 hover:scale-105"
        >
            <img src={imageURL} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-500 dark:text-neon-cyan mb-2">
                    {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {description}
                </p>
                <a href={projectURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-pink-500 dark:text-neon-pink hover:underline"
                >
                    View project &rarr;
                </a>
            </div>
        </div>

    )
}

export default ProjectCard;