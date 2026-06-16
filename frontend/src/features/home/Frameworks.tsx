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
    },
    {
        name: "zod",
        badge: "https://img.shields.io/badge/zod-374151?style=flat-square&logo=zod&logoColor=408AFF"
    },
    {
        name: "Redux",
        badge: "https://img.shields.io/badge/Redux-374151?style=flat-square&logo=redux&logoColor=764ABC"
    },
    {
        name: "Jest",
        badge: "https://img.shields.io/badge/Jest-374151?style=flat-square&logo=jest&logoColor=C21325"
    },
    {
        name: "JUnit 5",
        badge: "https://img.shields.io/badge/JUnit5-374151?style=flat-square&logo=junit5&logoColor=25A162"
    },
    {
        name: "NumPy",
        badge: "https://img.shields.io/badge/NumPy-374151?style=flat-square&logo=numpy&logoColor=013243"
    },
    {
        name: "pandas",
        badge: "https://img.shields.io/badge/pandas-374151?style=flat-square&logo=pandas&logoColor=150458"
    },
    {
        name: "Bootstrap",
        badge: "https://img.shields.io/badge/Bootstrap-374151?style=flat-square&logo=bootstrap&logoColor=7952B3"
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
