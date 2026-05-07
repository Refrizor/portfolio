import Page from "../components/Page.tsx";
import PageLayout from "../layouts/PageLayout.tsx";
import Container from "../components/Container.tsx";
import HeroSection from "../features/home/HeroSection.tsx";
import AboutPreviewSection from "../features/home/AboutPreviewSection.tsx";
import Divider from "../components/Divider.tsx";

function HomePage() {
    return (
        <Page title={"Portfolio"} description={"Devin Collin's portfolio"}>
            <PageLayout>
                <Container>
                    <HeroSection/>
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
