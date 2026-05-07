import { Link } from "react-router-dom";

const navItems = [
    {
        text: 'Home',
        link: '/'
    },
    {
        text: 'About',
        link: '/about'
    }
];

function Header() {
    return (
        <header className="site-header">
            <div className="site-nav">
                <p className="site-nav__brand">Devin Collins</p>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.link}>
                            <Link to={item.link}>
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}

export default Header;
