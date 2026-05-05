import Home from "./Home.tsx";
import {PageLayout} from "./PageLayout.tsx";
import Navbar from "./Navbar.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
function App() {

    return (
        <>
            <PageLayout>
                <Navbar></Navbar>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Navbar />} />
                        [...]
                    </Routes>
                </BrowserRouter>
            </PageLayout>
        </>
    )
}

export default App
