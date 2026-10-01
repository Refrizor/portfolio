import Languages from "./Languages.tsx";
import Tools from "./Tools.tsx";
import Databases from "./Databases.tsx";
import Frameworks from "./Frameworks.tsx";
import Workspace from "./Workspace.tsx";

function TechnicalStackSection() {
    return (
        <section id="stack" className="content-section stack-section">
            <div className="container">
                <div className="section-heading mb-4 mb-lg-5">
                    <p className="eyebrow mb-2">What I work with</p>
                    <h2>Technical stack</h2>
                    <p>Languages, tools, and environments I use to build and ship software.</p>
                </div>
                <div className="row g-4 stack-grid">
                    <div className="col-lg-6"><Languages/></div>
                    <div className="col-lg-6"><Frameworks/></div>
                    <div className="col-lg-6"><Databases/></div>
                    <div className="col-lg-6"><Tools/></div>
                    <div className="col-12"><Workspace/></div>
                </div>
            </div>
        </section>
    );
}

export default TechnicalStackSection;
