import Card from "../../components/Card.tsx";

const tools = [

    {
        name: "Git",
        badge: "https://img.shields.io/badge/Git-F14E32?style=flat-square&logo=git&logoColor=white"
    },
    {
        name: "GitHub",
        badge: "https://img.shields.io/badge/GitHub-black?style=flat-square&logo=github&logoColor=white"
    },
    {
        name: "Docker",
        badge: "https://img.shields.io/badge/GitHub Actions-1F883D?style=flat-square&logo=github-actions&logoColor=white"
    },
    {
        name: "Docker",
        badge: "https://img.shields.io/badge/Docker-1D63ED?style=flat-square&logo=docker&logoColor=white"
    },
    {
        name: "CloudFlare Workers",
        badge: "https://img.shields.io/badge/Cloudflare%20Workers-FF4A03?style=flat-square&logo=Cloudflare-Workers&logoColor=white"
    },
    {
        name: "Postman",
        badge: "https://img.shields.io/badge/Postman-EF5B25?style=flat-square&logo=postman&logoColor=white"
    },
];

export default function Tools() {
    return (
        <section className="tools">
            <h2>Tools</h2>
            <div className="grid">
                {tools.map((tool) => (
                    <Card className={"card"} key={tool.name} src={tool.badge}></Card>
                ))}
            </div>
        </section>
    )
}
