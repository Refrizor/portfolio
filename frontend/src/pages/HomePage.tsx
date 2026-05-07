import PageLayout from "../layouts/PageLayout.tsx";
import HeroSection from "../features/home/HeroSection.tsx";
import Page from "../components/Page.tsx";

function HomePage() {
    return (
        <Page title={"Portfolio"} description={"Devin Collin's portfolio"}>
            <PageLayout>
                <HeroSection/>
            </PageLayout>
        </Page>
    )
}

export default HomePage;
