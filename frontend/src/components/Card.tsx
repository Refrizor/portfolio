import type {CSSProperties} from "react";

type CardProps = {
    className?: string
    src?: string;
    alt?: string;
    style?: CSSProperties;
};

function Card({className = "card", src, alt = "", style}: CardProps) {
    return (
        <div className="card-shell" style={style}>
            <div className={className}>
                {src && <img src={src} alt={alt}/>}
            </div>
        </div>

    );
}

export default Card;
