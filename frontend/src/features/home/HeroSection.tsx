import Languages from "./Languages.tsx";
import Databases from "./Databases.tsx";

function HeroSection(){
    return (
        <section className="home-hero">
            <h1 className={"home-hero__title"}>Devin's Portfolio</h1>
            <div className={"home-hero__content"}>
                <p className={"home-hero__text"}>
                    Hi, I'm Devin Collins. Full-stack software developer focused on
                    APIs, databases, backend architecture, and practical web applications.
                </p>
                <Languages/>
                <Databases/>
            </div>
        </section>
    );
}

export default HeroSection;