// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from "./Footer.jsx";
import NavBar from "./NavigationBar.jsx";

const Layout = ({ children, showLogo, footerText }) => {
    return (
        <div>
            <Header />
            <NavBar />
            <main>{children}</main>
            <Footer showLogo={showLogo} footerText={footerText} />
        </div>
    );
};

export default Layout;
