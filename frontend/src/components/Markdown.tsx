import type {ComponentPropsWithoutRef} from "react";
import ReactMarkdown, {type Components, type ExtraProps} from "react-markdown";
import remarkGfm from "remark-gfm";
import {Link, useInRouterContext} from "react-router-dom";
import "../styles/markdown.css";

export type MarkdownProps = Omit<ComponentPropsWithoutRef<"div">, "children"> & {
    children: string;
    components?: Components;
};

function MarkdownLink({href, children, ...props}: ComponentPropsWithoutRef<"a"> & ExtraProps) {
    // The parser's syntax node is metadata, not a DOM attribute.
    delete props.node;
    const inRouter = useInRouterContext();
    const external = /^(https?:)?\/\//i.test(href ?? "");

    // Keep hash links native so the browser scrolls to the target.
    if (inRouter && href && !/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(href)) {
        return <Link {...props} to={href}>{children}</Link>;
    }

    return (
        <a {...props} href={href} target={external ? "_blank" : undefined}
           rel={external ? "noopener noreferrer" : undefined}>
            {children}
        </a>
    );
}

const defaultComponents: Components = {
    a: MarkdownLink,
    table: ({children}) => (
        <div className="table-responsive">
            <table className="table table-bordered">{children}</table>
        </div>
    ),
};

/** Render Markdown strings as semantic HTML, with optional React component overrides. */
function Markdown({children, components, className = "", ...props}: MarkdownProps) {
    return (
        <div {...props} className={`markdown ${className}`.trim()}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}
                           components={{...defaultComponents, ...components}}>
                {children}
            </ReactMarkdown>
        </div>
    );
}

export default Markdown;
