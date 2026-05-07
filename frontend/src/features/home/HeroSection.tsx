import Languages from "./Languages.tsx";
import Databases from "./Databases.tsx";
import Tools from "./Tools.tsx";

function HeroSection() {
    return (
        <section className="home-hero section">
            <h1 className={"home-hero__title"}>Devin's Portfolio</h1>
            <div className={"home-hero__content"}>
                <p className={"home-hero__text"}>
                    Hi, I'm <span className={"home-hero__text__highlight"}> Devin Collins</span>.
                    I'm a full-stack software developer focused on
                    APIs, databases, backend architecture, and practical web applications.
                </p>
                <Languages/>
                <Databases/>
                <Tools/>
            </div>
        </section>
    );
}

export default HeroSection;
