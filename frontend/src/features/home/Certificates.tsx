type Certificate = {
    title: string,
    description?: string,
    completionDate?: string,
    url?: string,
    issuer?: string
}

const professionalCertifications: Certificate[] = [
    {
        title: "IBM Full Stack Software Developer Professional Certificate",
        completionDate: "June 29, 2026",
        url: "https://coursera.org/share/b48e8dce6a4e24a6a772521530c93f0a",
        issuer: "IBM"
    }
]

// Individual course certs - probably unlist once I receive the above

const courseCertificates: Certificate[] = [
    {
        title: "Introduction to Software Engineering",
        completionDate: "September 3, 2024",
        url: "https://coursera.org/share/f269aa143365e733850fa873ebb36f14",
        issuer: "IBM"
    },
    {
        title: "Introduction to HTML, CSS, & JavaScript",
        completionDate: "April 17, 2025",
        url: "https://coursera.org/share/5ed3221374ecad69a437c016700b33ac",
        issuer: "IBM"
    },
    {
        title: "Developing Back-End Apps with Node.js and Express",
        completionDate: "June 18, 2025",
        url: "https://coursera.org/share/7e09d7f49d174ee42fef466322eb7678",
        issuer: "IBM"
    },
    {
        title: "Getting Started with Git and GitHub",
        completionDate: "June 18, 2025",
        url: "https://coursera.org/share/83a1a07967bac347bf70d9fa1f4e7668",
        issuer: "IBM"
    },
    {
        title: "Python for Data Science, AI & Development",
        completionDate: "September 4, 2025",
        url: "https://coursera.org/share/010b576893675a146820a1acaeedc7a3",
        issuer: "IBM"
    },
    {
        title: "Developing AI Applications with Python and Flask",
        completionDate: "September 16, 2025",
        url: "https://coursera.org/share/89e13ba65567920b7cffefb4f868183e",
        issuer: "IBM"
    },
    {
        title: "Django Application Development with SQL and Databases",
        completionDate: "February 12, 2026",
        url: "https://coursera.org/share/a1dd82525a1e9d7c8f5da264e677885c",
        issuer: "IBM"
    },
    {
        title: "Developing Front-End Apps with React",
        completionDate: "April 10, 2026",
        url: "https://coursera.org/share/86704bb89dbcd0714cfe8962a9b847f9",
        issuer: "IBM"
    },
    {
        title: "Application Development using Microservices and Serverless",
        completionDate: "May 20, 2026",
        url: "https://coursera.org/share/034e328c6b3daf41598d35c9504338c4",
        issuer: "IBM"
    },
    {
        title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
        completionDate: "May 20, 2026",
        url: "https://coursera.org/share/89f2620207e5f487f59d2d486d975e19",
        issuer: "IBM"
    },
    {
        title: "Full Stack Application Development Capstone Project",
        completionDate: "June 8, 2026",
        url: "https://coursera.org/share/8c84e09db1505fc94103a9b3a667dbf5",
        issuer: "IBM"
    },
    {
        title: "Introduction to Cloud Computing",
        completionDate: "June 11, 2026",
        url: "https://coursera.org/share/9beeb1783ada30d02114ce01c1eda599",
        issuer: "IBM"
    },
    {
        title: "Full Stack Software Developer Assessment",
        completionDate: "June 12, 2026",
        url: "https://coursera.org/share/dbc87812ea7ba4507073af55514ef169",
        issuer: "IBM"
    },
    {
        title: "Generative AI: Elevate your Software Development Career",
        completionDate: "June 26, 2026",
        url: "https://coursera.org/share/c53e4ba44d4e00f67d0f7b82ace1d73c",
        issuer: "IBM"
    },
    {
        title: "Machine Learning for Absolute Beginners - Level 1",
        completionDate: "June 28, 2026",
        url: "https://coursera.org/share/7a2ec6d6cc15dfb4f10e5338c2886345",
        issuer: "Packt"
    }
];

export function ProfessionalCertificates() {
    return (
        <ul className="list-group">
            {[...professionalCertifications]
                .sort((a, b) => {
                    const dateA = a.completionDate
                        ? new Date(a.completionDate).getTime()
                        : 0;

                    const dateB = b.completionDate
                        ? new Date(b.completionDate).getTime()
                        : 0;

                    return dateB - dateA
                })
                .map(certificate => (
                    <a
                        key={certificate.title}
                        href={certificate.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="list-group-item"
                    >
                        {certificate.title}
                        <div style={{color: 'var(--text-muted)'}}>
                            {certificate.completionDate} — {certificate.issuer}
                        </div>
                    </a>
                ))}
        </ul>
    );
}

export function Certificates() {
    return (
        <ul className="list-group">
            {[...courseCertificates]
                .sort((a, b) => {
                    const dateA = a.completionDate
                        ? new Date(a.completionDate).getTime()
                        : 0;

                    const dateB = b.completionDate
                        ? new Date(b.completionDate).getTime()
                        : 0;

                    return dateB - dateA
                })
                .map(certificate => (
                    <a
                        key={certificate.title}
                        href={certificate.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="list-group-item"
                    >
                        {certificate.title}
                        <div style={{color: 'var(--text-muted)'}}>
                            {certificate.completionDate} — {certificate.issuer}
                        </div>
                    </a>
                ))}
        </ul>
    );
}
