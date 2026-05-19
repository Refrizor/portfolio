import {Badge, BadgeList} from "../../components/Badge.tsx";
import Button from "../../components/Button.tsx";
import Card from "../../components/Card.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLink} from "@fortawesome/free-solid-svg-icons";

const projects = [
    {
        name: "Pulsacod",
        description: "Pulsacod is a Minecraft server monitoring project with Paper/Velocity plugins, a TypeScript REST API, and planned internal tooling for tracking uptime, heartbeats, and player activity.",
        tags: ["TypeScript", "Java", "Express", "PostgreSQL", "Redis"],
        url: "https://github.com/Refrizor/pulsacod"
    },
    {
        name: "Time Tools",
        description: "Timetools GUI is a simple, user-friendly Java application that provides tools for generating and converting Unix timestamps through a GUI. Uses Java Swing to offer a clean experience for working with Unix time.",
        tags: ["Java", "GUI", "Executable"],
        url: "https://github.com/Refrizor/timetools-gui"
    },
    {
        name: "This Website",
        description: "This portfolio website is available on my GitHub.",
        tags: ["React", "TypeScript"],
        url: "https://github.com/Refrizor/portfolio"
    }
];

function FeaturedProjectsSection() {
    return (
        <section className="featured-projects section">
            <h2>Featured Projects</h2>
            <p>A list of projects that are currently featured.</p>

            <div className={"grid grid--cards"}>
                {projects.map(project => (
                    <Card fadeIn hoverScale>
                        <div className={"card__header"}>
                            <h3 className={"card__title"}>{project.name}</h3>
                            <Button to={project.url} newTab><FontAwesomeIcon icon={faExternalLink}/></Button>
                        </div>
                        <div className={"card__content"}>
                            <p>{project.description}</p>

                            {/* Tags */}
                            <div className={"card__footer"}><p>Tags:</p></div>
                            <BadgeList>
                                {project.tags.map((tag) => (
                                    <Badge key={tag} className={"badge--gray tag"}>{tag}</Badge>
                                ))}
                            </BadgeList>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default FeaturedProjectsSection;
