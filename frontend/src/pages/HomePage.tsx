import Page from "../components/Page.tsx";
import HeroSection from "../features/home/HeroSection.tsx";
import AboutPreviewSection from "../features/home/AboutPreviewSection.tsx";
import FeaturedProjectsSection from "../features/home/FeaturedProjectsSection.tsx";
import TechnicalStackSection from "../features/home/TechnicalStackSection.tsx";

function HomePage() {
    return (
        <Page title={"Portfolio"} description={"Devin Collins’s portfolio"}>
            <HeroSection/>
            <FeaturedProjectsSection/>
            <TechnicalStackSection/>
            <AboutPreviewSection/>
        </Page>
    )
}

export default HomePage;
