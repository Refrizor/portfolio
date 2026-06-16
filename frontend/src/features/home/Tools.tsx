import Shield from "../../components/Shield.tsx";

const tools = [
    {
        name: "Git",
        badge: "https://img.shields.io/badge/Git-374151?style=flat-square&logo=git&logoColor=FDA4AF"
    },
    {
        name: "GitHub",
        badge: "https://img.shields.io/badge/GitHub-374151?style=flat-square&logo=github&logoColor=E5E7EB"
    },
    {
        name: "GitHub Actions",
        badge: "https://img.shields.io/badge/GitHub%20Actions-374151?style=flat-square&logo=github-actions&logoColor=93C5FD"
    },
    {
        name: "Docker",
        badge: "https://img.shields.io/badge/Docker-374151?style=flat-square&logo=docker&logoColor=7DD3FC"
    },
    {
        name: "Kubernetes",
        badge: "https://img.shields.io/badge/Kubernetes-374151?style=flat-square&logo=kubernetes&logoColor=326CE5"
    },
    {
        name: "Cloudflare Workers",
        badge: "https://img.shields.io/badge/Cloudflare%20Workers-374151?style=flat-square&logo=cloudflareworkers&logoColor=FDBA74"
    },
    {
        name: "OpenAPI",
        badge: "https://img.shields.io/badge/OpenAPI-374151?style=flat-square&logo=openapiinitiative&logoColor=6BA539"
    },
    {
        name: "Swagger",
        badge: "https://img.shields.io/badge/Swagger-374151?style=flat-square&logo=swagger&logoColor=85EA2D"
    },
    {
        name: "Postman",
        badge: "https://img.shields.io/badge/Postman-374151?style=flat-square&logo=postman&logoColor=FDBA74"
    },
];

export default function Tools() {
    return (
        <section className="tools">
            <h3>Tools</h3>

            <div className="shield-list">
                {tools.map((tool) => (
                    <Shield key={tool.name} name={tool.name} badge={tool.badge} />
                ))}
            </div>
        </section>
    )
}
