import Shield from "../../components/Shield.tsx";

const frameworks = [
    {
        name: "Express",
        badge: "https://img.shields.io/badge/Express-374151?style=flat-square&logo=express&logoColor=E5E7EB"
    },
    {
        name: "React",
        badge: "https://img.shields.io/badge/React-374151?style=flat-square&logo=react&logoColor=67E8F9"
    },
    {
        name: "Django",
        badge: "https://img.shields.io/badge/Django-374151?style=flat-square&logo=django&logoColor=86EFAC"
    },
    {
        name: "Flask",
        badge: "https://img.shields.io/badge/Flask-374151?style=flat-square&logo=flask&logoColor=E5E7EB"
    }
];

export default function Frameworks() {
    return (
        <section className="frameworks">
            <h3>Frameworks & Libraries</h3>
            <div className="shield-list">
                {frameworks.map((framework) => (
                    <Shield key={framework.name} name={framework.name} badge={framework.badge} />
                ))}
            </div>
        </section>
    )
}
