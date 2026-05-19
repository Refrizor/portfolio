import type {CSSProperties, ReactNode} from "react";

type CardProps = {
    children?: ReactNode;

    src?: string;
    alt?: string;

    className?: string;
    frameClassName?: string;

    fadeIn?: boolean;
    hoverScale?: boolean;

    style?: CSSProperties;
    frameStyle?: CSSProperties;
};

function Card({
                  children,
                  src,
                  alt = "",
                  className = "",
                  frameClassName = "",
                  fadeIn = false,
                  hoverScale = false,
                  style,
                  frameStyle,
              }: CardProps) {

    const cardClassName = [
        "card",
        hoverScale && "card--hover-scale",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    const cardFrameClassName = [
        "card-frame",
        fadeIn && "card-frame--fade-in",
        frameClassName,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={cardFrameClassName} style={frameStyle}>
            <div className={cardClassName} style={style}>
                {src && <img className="card__image" src={src} alt={alt}/>}
                {children}
            </div>
        </div>
    );
}

export default Card;
