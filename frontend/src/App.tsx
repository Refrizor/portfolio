import Home from "./Home.tsx";
import {PageLayout} from "./PageLayout.tsx";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
function App() {

    return (
        <>
            <PageLayout>
                <Navbar></Navbar>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                    </Routes>
                </BrowserRouter>
                <Footer/>
            </PageLayout>
        </>
    )
}

export default App
