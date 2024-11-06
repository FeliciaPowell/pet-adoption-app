// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from "./Footer.jsx";

const Layout = ({ children, showLogo, footerText }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer showLogo={showLogo} footerText={footerText} />
        </div>
    );
};

export default Layout;
