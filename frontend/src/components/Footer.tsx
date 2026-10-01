import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faMailForward} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const footerLinks = [
    {name: "GitHub", icon: faGithub, link: "https://github.com/Refrizor"},
    {name: "LinkedIn", icon: faLinkedin, link: "https://www.linkedin.com/in/dev-collins"},
    {name: "Email", icon: faMailForward, link: "mailto:devin@inferris.com"},
];

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container py-5">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-4">
                    <div>
                        <p className="eyebrow mb-2">Let’s connect</p>
                        <h2 className="h3 mb-2">Have something in mind?</h2>
                        <a className="footer-email" href="mailto:devin@inferris.com">devin@inferris.com <span aria-hidden="true">↗</span></a>
                    </div>
                    <div className="d-flex flex-wrap gap-3">
                        {footerLinks.map(link => (
                            <a className="footer-link" key={link.name} href={link.link} aria-label={link.name}>
                                <FontAwesomeIcon icon={link.icon}/> {link.name}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="footer-bottom d-flex flex-wrap justify-content-between gap-2 mt-5 pt-3">
                    <span>© 2026 Devin Collins</span>
                    <span>Built with React & Bootstrap</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
