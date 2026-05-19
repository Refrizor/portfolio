import {Link} from "react-router-dom";
import type {CSSProperties, ReactNode} from "react";

type ButtonProps = {
    children: ReactNode;
    to?: string;
    newTab?: boolean;
    className?: string;
    style?: CSSProperties;
};

function Button({children, to, newTab = false, className = "", style}: ButtonProps) {
    const classes = `button ${className}`.trim();

    return to ? (
        <Link
            to={to}
            className={classes}
            style={style}
            target={newTab ? "_blank" : undefined}
            rel={newTab ? "noreferrer" : undefined}
        >
            {children}
        </Link>
    ) : (
        <button className={classes} style={style}>
            {children}
        </button>
    );
}

export default Button;
