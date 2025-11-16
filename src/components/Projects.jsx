import ProjectCard from "./ProjectCard";

const myProjects = [
    {
        title: "Portfoilio",
        description: "A brief description of my first awesome project. It uses React and Tailwind CSS!",
        imageUrl: "https://via.placeholder.com/400x200/ff00ff/ffffff?text=Project+1",
        projectUrl: "#" // Add your GitHub link here
    },
    {
        title: "Weather Tracker",
        description: "This project was built with Node.js and Express, creating a powerful REST API.",
        imageUrl: "https://via.placeholder.com/400x200/00eaff/000000?text=Project+2",
        projectUrl: "#" // Add your GitHub link here
    }
];

function Projects() {
    return (
        <section className="w-full py-16">
            <h2 className="
            text-4xl font-bold text-center mb-12
            text-blue-500 dark:text-neon-cyan
            ">
                MY PROJECTS
            </h2>
            <div className="max-w-6xl mx-auto px-8
                            grid grid-cols-1 md:grid-cols-2"
            >
                {myProjects.map((project) => (
                    <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    imageURL={project.imageUrl}
                    projectURL={project.projectUrl}
                    />
                ))}
            </div>

        </section>
    )
}




export default Projects;