import "./Home.css"
import Languages from "./Languages.tsx"

function Home() {
    return (
        <>
            <section className="home-hero">
                <h1 className={"home-hero__title"}>Devin's Portfolio</h1>
                <div className={"home-hero__content"}>
                    <p className={"home-hero__text"}>Hi, I'm Devin Collins. Full-stack software developer focused on
                        APIs, databases, backend architecture, and practical web applications.</p>

                    <h2>Languages</h2>
                    <Languages></Languages>
                </div>
            </section>

            <section>
                <h1>Languages</h1>
            </section>
        </>
    )
}

export default Home;