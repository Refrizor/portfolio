import Page from "../components/Page.tsx";
import PageLayout from "../layouts/PageLayout.tsx";
import Container from "../components/Container.tsx";
import HeroSection from "../features/home/HeroSection.tsx";
import AboutPreviewSection from "../features/home/AboutPreviewSection.tsx";
import Divider from "../components/Divider.tsx";
import FeaturedProjectsSection from "../features/home/FeaturedProjectsSection.tsx";
import TechnicalStackSection from "../features/home/TechnicalStackSection.tsx";

function HomePage() {
    return (
        <Page title={"Portfolio"} description={"Devin Collins’s portfolio"}>
            <PageLayout>
                <Container>
                    <HeroSection/>
                </Container>
                <Divider/>

                <Container>
                    <FeaturedProjectsSection/>
                </Container>
                <Divider/>

                <Container>
                    <TechnicalStackSection/>
                </Container>

                <Divider/>

                <Container>
                    <AboutPreviewSection/>
                </Container>
            </PageLayout>
        </Page>
    )
}

export default HomePage;
