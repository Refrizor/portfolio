import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faMailForward} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const footerLinks = [
    {name: "GitHub", icon: faGithub, link: "https://github.com/Refrizor"},
    {name: "LinkedIn", icon: faLinkedin, link: "https://www.linkedin.com/in/dev-collins"},
    {name: "Email", icon: faMailForward, link: "mailto:devcollins36@gmail.com"},
];

function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-footer__grid">
                <ul>
                    {footerLinks.map((link) => (
                        <li key={link.name}>
                            <span className="site-footer__item">
                                <a href={link.link}>
                                    <span className={"site-footer__item__icon"}>
                                        <FontAwesomeIcon icon={link.icon}/>
                                    </span>
                                    <span className={"site-footer__item__label"}>{link.name}</span>
                                </a>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <p className="site-footer__copyright">© 2026 Devin Collins</p>
        </footer>
    )
}

export default Footer;
