import Shield from "../../components/Shield.tsx";

const languages = [
    {
        name: "JavaScript",
        badge: "https://img.shields.io/badge/JavaScript-2F3542?style=flat-square&logo=javascript&logoColor=F0DB4F"
    },
    {
        name: "TypeScript",
        badge: "https://img.shields.io/badge/TypeScript-2F3542?style=flat-square&logo=typescript&logoColor=60A5FA"
    },
    {
        name: "Java",
        badge: "https://img.shields.io/badge/Java-2F3542?style=flat-square&logo=openjdk&logoColor=F97316"
    },
    {
        name: "Python",
        badge: "https://img.shields.io/badge/Python-2F3542?style=flat-square&logo=python&logoColor=93C5FD"
    },
];

export default function Languages() {
    return (
        <section className="languages">
            <h3>Languages</h3>

            <div className="shield-list">
                {languages.map((language) => (
                    <Shield key={language.name} name={language.name} badge={language.badge} />
                ))}
            </div>
        </section>
    )
}
