import type {ReactNode} from "react";
import PageHelmet from "./PageHelmet.tsx";

type PageProps = {
    title?: string;
    description?: string;
    children: ReactNode;
};

function Page({title, description, children}: PageProps) {
    return (
        <>
            <PageHelmet title={title} content={description}/>

            <main className="page">
                {children}
            </main>
        </>
    );
}

export default Page;
