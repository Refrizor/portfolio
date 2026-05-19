import Shield from "../../components/Shield.tsx";

const environments = [
    {
        name: "Linux",
        badge: "https://img.shields.io/badge/Linux-374151?style=flat-square&logo=linux&logoColor=FDE68A"
    },
    {
        name: "Ubuntu",
        badge: "https://img.shields.io/badge/Ubuntu-374151?style=flat-square&logo=ubuntu&logoColor=FDBA74"
    },
    {
        name: "Fedora",
        badge: "https://img.shields.io/badge/Fedora-374151?style=flat-square&logo=fedora&logoColor=93C5FD"
    },
    {
        name: "macOS",
        badge: "https://img.shields.io/badge/macOS-374151?style=flat-square&logo=apple&logoColor=E5E7EB"
    },
    {
        name: "Windows",
        badge: "https://custom-icon-badges.demolab.com/badge/Windows-374151?logo=windows11&logoColor=white"
    },
];

export default function Workspace() {
    return (
        <section className="workspace">
            <div className="workspace__header">
                <h3>Workspace</h3>

                <p className="workspace__text">
                    I build and test projects across Linux, macOS, and Windows environments, with a workflow focused on version control, API testing, containerized development, and deployment tooling.
                </p>
            </div>

            <div className="workspace__group">
                <h4 className="workspace__group-title">Development Environments</h4>

                <ul className="shield-list">
                    {environments.map((environment) => (
                        <Shield
                            key={environment.name}
                            name={environment.name}
                            badge={environment.badge}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
}
