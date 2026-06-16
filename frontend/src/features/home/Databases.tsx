import Shield from "../../components/Shield.tsx";

const databases = [
    {
        name: "PostgreSQL",
        badge: "https://img.shields.io/badge/PostgreSQL-374151?style=flat-square&logo=postgresql&logoColor=93C5FD"
    },
    {
        name: "Redis",
        badge: "https://img.shields.io/badge/Redis-374151?style=flat-square&logo=redis&logoColor=FCA5A5"
    },
    {
        name: "MySQL",
        badge: "https://img.shields.io/badge/MySQL-374151?style=flat-square&logo=mysql&logoColor=7DD3FC"
    },
    {
        name: "SQLite",
        badge: "https://img.shields.io/badge/SQLite-374151?style=flat-square&logo=sqlite&logoColor=003B57"
    },
    {
        name: "MongoDB",
        badge: "https://img.shields.io/badge/MongoDB-374151?style=flat-square&logo=mongodb&logoColor=86EFAC"
    },
];

export default function Databases() {
    return (
        <section className="databases">
            <h3>Databases</h3>
            <div className="shield-list">
                {databases.map((database) => (
                    <Shield key={database.name} name={database.name} badge={database.badge}/>
                ))}
            </div>
        </section>
    )
}
