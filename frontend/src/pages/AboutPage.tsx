import Page from "../components/Page.tsx";
import AboutPreviewSection from "../features/home/AboutPreviewSection.tsx";

function AboutPage() {
    return (
        <Page title="About Devin Collins" description="Background, goals, and certificates of Devin Collins.">
            <h1 className="visually-hidden">About Devin Collins</h1>
            <AboutPreviewSection/>
        </Page>
    );
}

export default AboutPage;
