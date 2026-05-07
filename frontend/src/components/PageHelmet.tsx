import {Helmet} from "react-helmet-async";

type HelmetProps = {
    title?: string,
    content?: string
};

function PageHelmet({title, content}: HelmetProps) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={content}/>
        </Helmet>
    );
}

export default PageHelmet;
