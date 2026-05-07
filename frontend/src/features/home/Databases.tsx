import Card from "../../components/Card.tsx";

const databases = [
    {
        name: "PostgreSQL",
        badge: "https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white"
    },
    {
        name: "MongoDB",
        badge: "https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white"
    },
    {
        name: "Redis",
        badge: "https://img.shields.io/badge/Redis-FF4438?style=flat-square&logo=redis&logoColor=white"
    },
    {
        name: "MySQL",
        badge: "https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white"
    }
];

export default function Databases() {
    return (
        <section className="databases">
            <h2>Databases</h2>
            <div className="grid">
                {databases.map((database) => (
                    <Card className={"card"} key={database.name} src={database.badge}></Card>
                ))}
            </div>
        </section>
    )
}
