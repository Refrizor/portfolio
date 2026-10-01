
const projects = [
    {
        name: "IBM Developer Capstone Project",
        description: "A car dealership demo application consisting of a Django app, proxied React frontend, and an Express backend.",
        tags: ["Django", "Express.js", "React.js", "MongoDB", "SQLite"],
        url: "https://github.com/Refrizor/xrwvm-fullstack_developer_capstone"
    },
    {
        name: "Pulsacod",
        description: "Pulsacod is a server instance monitoring application catering toward Mojang servers with planned internal tooling for uptime tracking, heartbeats, and player activity.",
        tags: ["TypeScript", "Java", "Express.js", "PostgreSQL", "Redis", "Open-source"],
        url: "https://github.com/Refrizor/pulsacod"
    },
    {
        name: "Time Tools",
        description: "Timetools GUI is a simple, user-friendly Java application that provides tools for generating and converting Unix timestamps through a GUI. Uses Java Swing to offer a clean experience for working with Unix time.",
        tags: ["Java", "GUI", "Utilities", "Open-source"],
        url: "https://github.com/Refrizor/timetools-gui"
    },
    {
        name: "This Portfolio",
        description: "This portfolio website is available on my GitHub.",
        tags: ["React.js", "TypeScript"],
        url: "https://github.com/Refrizor/portfolio"
    }
];

function FeaturedProjectsSection() {
    return (
        <section id="projects" className="content-section">
            <div className="container">
                <div className="section-heading mb-4 mb-lg-5">
                    <p className="eyebrow mb-2">Selected work</p>
                    <h2>Featured projects</h2>
                    <p>A few things I’ve built and worked on.</p>
                </div>
                <div className="row g-4">
                    {projects.map((project, index) => (
                        <div className="col-md-6" key={project.name}>
                            <article className="card project-card h-100">
                                <div className="card-body d-flex flex-column p-4 p-lg-5">
                                    <span className="project-number mb-4">0{index + 1} / Project</span>
                                    <h3 className="h4 mb-3">{project.name}</h3>
                                    <p className="project-description mb-4">{project.description}</p>
                                    <div className="d-flex flex-wrap gap-2 mt-auto mb-4">
                                        {project.tags.map(tag => <span className="badge project-tag" key={tag}>{tag}</span>)}
                                    </div>
                                    <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on GitHub`}>
                                        View on GitHub <span aria-hidden="true">↗</span>
                                    </a>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedProjectsSection;
