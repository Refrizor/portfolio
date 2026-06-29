import {Certificates, ProfessionalCertificates} from "./Certificates.tsx";

const bio = [
    <>I first jumped into the world of programming after <i>Minecraft</i> released.
        Fiddling with Bukkit and later Spigot/Paper plugins, I became familiar with the Java programming language.
    </>,

    <>Later, I volunteered at <i>DiamondFire</i>, an EdTech platform that teaches coding through an interactive
        toolchain. Discovering my passion there, I spent several years scaling into diverse responsibilities. I handled
        everything from frontend theme development and technical support to platform administration—including
        configuring secure user access controls, mitigating spam, hosting cross-platform events, and maintaining
        extensive internal handbooks.</>,

    <>In 2023-2024, I spent time in pharmaceutical logistics at MD Logistics, coordinating
        cold-chain operations, working with warehouse automation systems like AGV pickers, and deploying to Foreign-Trade Zones (FTZ).
    In parallel, I was learning asynchronous programming in Java, experimenting with Redis caching and Pub/Sub, and growing expertise
        in Linux sysadmin work, networking, web server configuration (nginx), and deploying applications on Virtual Private Servers (VPS) and dedicated machines.
    </>,

    <>After stepping away from logistics to commit to my passion for software engineering, I enrolled into the
        IBM Full Stack Software Developer Professional Certificate program to formalize my technical skills and
        deepen my knowledge of modern web architecture. Since then, this has strengthened my experience in
    JavaScript and Python, architecture design, testing, and CI/CD; and frameworks and libraries like Express, React, Django, and Flask; and with technology and tooling like Docker, Kubernetes, and more.</>,

    <>Since 2024, I found a strong interest in API development and schema modeling. Building reliable applications with safe boundaries
    and proper validation.</>,

    <>On June 29, 2026, I happily completed the IBM Full Stack Software Developer program and received a professional certificate.</>
];

function AboutPreviewSection() {
    return (
        <div className="about-preview section">
            <h2 className={"home-hero__title"}>About me</h2>
            <div className={"home-hero__content"}>
                {bio.map((item, index) => (
                    <p key={index} className={"home-hero__text"}>
                        {item}
                    </p>
                ))}
                <h3>Onward</h3>
                <p className={"home-hero__text"}>
                    <ul>
                        <li>Open-source Inferris applications</li>
                        <li>Ship Pulsacod's server instance uptime and session-based tracking systems</li>
                        <li>Strengthen my foundation in C++ and Machine Learning</li>
                    </ul>
                </p>
                <h3>Long-term Goals</h3>
                <p className={"home-hero__text"}>
                    <ul>
                        <li>Learn Java's Spring framework</li>
                        <li>Considering an Associates Degree in software development</li>
                        <li>Grow experience in Unreal Engine's API</li>
                    </ul>
                </p>

                <h3>Professional Certificates</h3>
                <ProfessionalCertificates/>

                <h3>Individual Course Certificates</h3>
                <Certificates/>
            </div>
        </div>
    );
}

export default AboutPreviewSection;
