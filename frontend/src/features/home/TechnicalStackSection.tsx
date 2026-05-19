import Languages from "./Languages.tsx";
import Tools from "./Tools.tsx";
import Databases from "./Databases.tsx";
import Frameworks from "./Frameworks.tsx";
import Workspace from "./Workspace.tsx";

function TechnicalStackSection() {
    return (
        <section className="section section--tech-stack">
            <h2>Technical Stack</h2>
            <Languages/>
            <Frameworks/>
            <Databases/>
            <Tools/>
            <Workspace/>
        </section>
    );
}

export default TechnicalStackSection;