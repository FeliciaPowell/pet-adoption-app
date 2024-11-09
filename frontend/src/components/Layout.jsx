// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from "./Footer.jsx";
import LandingFooter from "./LandingFooter.jsx";
import NavBar from "./NavigationBar.jsx";

const Layout = ({ children, footerType }) => {
    return (
        <div>
            <Header />
            <NavBar />
            <main>{children}</main>
            {footerType === 'landing' ? <LandingFooter /> : <Footer />}
        </div>
    );
};

export default Layout;
