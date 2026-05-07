import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

function RootLayout() {
    return (
        <div className="root-layout">
            <Header />
            <main className="site-main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default RootLayout;
