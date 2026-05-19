import type {CSSProperties, ReactNode} from "react";

type BadgeProps = {
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
};

function Badge({children, className, style}: BadgeProps) {
    return (
        <span className={`badge ${className}`} style={style}>{children}</span>
    );
}

function BadgeList({children, className, style}: BadgeProps) {
    return (
        <div className={`badge-list ${className}`} style={style}>{children}</div>
    )
}

export {BadgeList, Badge};
