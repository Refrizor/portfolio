type ShieldProps = {
    name: string;
    badge: string;
    className?: string;
};

function Shield({name, badge, className = ""}: ShieldProps) {
    return (
        <li className={`shield-item ${className}`}>
            <img className="shield-badge" src={badge} alt={name}/>
        </li>
    );
}

export default Shield;
