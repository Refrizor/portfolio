import Card from "../../components/Card.tsx";

const languages = [
    {
        name: "JavaScript",
        badge: "https://img.shields.io/badge/JavaScript-F0DB4F?style=flat-square&logo=javascript&logoColor=black"
    },
    {
        name: "TypeScript",
        badge: "https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"
    },
    {
        name: "Java",
        badge: "https://img.shields.io/badge/Java-E76F00?style=flat-square&logo=openjdk&logoColor=white"
    },
    {
        name: "Python",
        badge: "https://img.shields.io/badge/Python-3776ab?style=flat-square&logo=python&logoColor=white"
    }
];

export default function Languages() {
    return (
        <section className="languages">
            <h2>Languages</h2>
            <div className="grid">
                {languages.map((language) => (
                    <Card className={"card"} key={language.name} src={language.badge}></Card>
                ))}
            </div>
        </section>
    )
}
