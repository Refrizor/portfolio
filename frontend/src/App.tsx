import {BrowserRouter, Route, Routes} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<RootLayout/>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;