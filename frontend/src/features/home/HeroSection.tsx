function HeroSection() {
    return (
        <section className="hero-section">
            <div className="container py-5">
                <div className="row align-items-center g-4 py-lg-5">
                    <div className="col-lg-8">
                        <p className="eyebrow mb-3">Full-stack software developer</p>
                        <h1 className="hero-title mb-4">Building useful software, <span>from API to interface.</span></h1>
                        <p className="hero-copy mb-4">I’m Devin Collins. I focus on APIs, databases, backend architecture, and practical web applications.</p>
                        <div className="d-flex flex-wrap gap-2">
                            <a className="btn btn-primary btn-lg" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
                            <a className="btn btn-outline-secondary btn-lg" href="mailto:devin@inferris.com">Get in touch</a>
                        </div>
                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                        <div className="hero-aside">
                            <span className="hero-aside__mark" aria-hidden="true">DC</span>
                            <p className="mb-0">Thoughtful systems.<br/>Clear experiences.<br/>Code built to last.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
