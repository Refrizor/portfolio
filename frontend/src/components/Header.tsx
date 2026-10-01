import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="site-header sticky-top">
            <nav className="container d-flex align-items-center justify-content-between gap-3 py-3" aria-label="Main navigation">
                <Link className="site-brand" to="/">Devin Collins<span className="brand-dot">.</span></Link>
                <div className="d-flex align-items-center gap-3 gap-sm-4">
                    <a className="nav-link" href="/#projects">Projects</a>
                    <a className="nav-link" href="/#stack">Skills</a>
                    <a className="nav-link" href="/#about">About</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;
