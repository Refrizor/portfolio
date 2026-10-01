import {Certificates, ProfessionalCertificates} from "./Certificates.tsx";
import Markdown from "../../components/Markdown.tsx";

const bio = [
    `I first jumped into the world of programming after *Minecraft* released.
        Fiddling with Bukkit and later Spigot/Paper plugins, I became familiar with the Java programming language.
    `,

    `Later, I volunteered at *DiamondFire*, an EdTech platform that teaches coding through an interactive
        toolchain. Discovering my passion there, I spent several years scaling into diverse responsibilities. I handled
        everything from frontend theme development and technical support to platform administration—including
        configuring secure user access controls, mitigating spam, hosting cross-platform events, and maintaining
        extensive internal handbooks.`,

    `In 2023-2024, I spent time in pharmaceutical logistics at MD Logistics, coordinating
        cold-chain operations, working with warehouse automation systems like AGV pickers, and deploying to Foreign-Trade Zones (FTZ).
    In parallel, I was learning asynchronous programming in Java, experimenting with Redis caching and Pub/Sub, and growing expertise
        in Linux sysadmin work, networking, web server configuration (nginx), and deploying applications on Virtual Private Servers (VPS) and dedicated machines.
    `,

    `After stepping away from logistics to commit to my passion for software engineering, I enrolled into the
        IBM Full Stack Software Developer Professional Certificate program to formalize my technical skills and
        deepen my knowledge of modern web architecture. Since then, this has strengthened my experience in
    JavaScript and Python, architecture design, testing, and CI/CD; and frameworks and libraries like Express, React, Django, and Flask; and with technology and tooling like Docker, Kubernetes, and more.`,

    `Since 2024, I found a strong interest in API development and schema modeling. Building reliable [Express.js](https://expressjs.com) applications with safe boundaries
    and proper validation.`,

    `On June 29, 2026, I happily completed the IBM Full Stack Software Developer program and received a professional certificate.`
].map(paragraph => paragraph.trim()).join("\n\n");

function AboutPreviewSection() {
    return (
        <section id="about" className="content-section about-section">
            <div className="container">
                <div className="section-heading mb-4 mb-lg-5">
                    <p className="eyebrow mb-2">The person behind the projects</p>
                    <h2>About me</h2>
                </div>
                <div className="row g-4 g-lg-5">
                    <Markdown className="col-lg-8 about-copy">{bio}</Markdown>
                    <aside className="col-lg-4">
                        <div className="about-sidebar">
                            <h3 className="h5">What’s next</h3>
                            <ul>
                                <li>Open-source Inferris applications, including the API</li>
                                <li>Ship Pulsacod’s uptime and session tracking systems</li>
                                <li>Strengthen my foundation in C++ and algorithms</li>
                            </ul>
                            <h3 className="h5 mt-4">Long-term goals</h3>
                            <ul>
                                <li>Learn Java’s Spring framework</li>
                                <li>Grow more experience in Unreal Engine’s API</li>
                                <li>Consider an Associate Degree in software engineering/CompSci.</li>

                            </ul>
                        </div>
                    </aside>
                </div>
                <div className="certificates mt-5 pt-4">
                    <div className="row g-4 g-lg-5">
                        <div className="col-lg-5">
                            <p className="eyebrow mb-2">Learning & credentials</p>
                            <h3>Certificates</h3>
                            <p className="section-description">Completed coursework and professional certification.</p>
                        </div>
                        <div className="col-lg-7">
                            <h4 className="h6 certificate-label">Professional certificate</h4>
                            <ProfessionalCertificates/>
                            <details className="course-details mt-4">
                                <summary>Individual course certificates</summary>
                                <div className="pt-3"><Certificates/></div>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutPreviewSection;
