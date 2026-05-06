import Card from "./Card.tsx";
import "./index.css"

const languages = [
    {
        name: "JavaScript",
        badge: "https://img.shields.io/badge/JavaScript-F0DB4F?style=for-the-badge&logo=javascript&logoColor=white"
    },
    {
        name: "TypeScript",
        badge: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
    },
    {
        name: "Java",
        badge: "https://img.shields.io/badge/Java-E76F00?style=for-the-badge&logo=openjdk&logoColor=white"
    },
    {
        name: "Python",
        badge: "https://img.shields.io/badge/Python-3776ab?style=for-the-badge&logo=python&logoColor=white"

    }
];

export default function Languages() {
    return (
        <div className="grid">
            {languages.map((language) => (
                <Card className={"card"} key={language.name} src={language.badge}></Card>
                // <div key={language.name} className={"home__language-card"}>
                //     <img alt={language.name} src={language.badge}/>
                // </div>
            ))}
        </div>
    )
}
