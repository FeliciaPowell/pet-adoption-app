// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from "./Footer.jsx";
import NavigationBar from "./NavigationBar.jsx";

const Layout = ({ children, showLogo, footerText }) => {
    return (
        <div>
            <Header />
            <NavigationBar />
            <main>{children}</main>
            <Footer showLogo={showLogo} footerText={footerText} />
        </div>
    );
};

export default Layout;
