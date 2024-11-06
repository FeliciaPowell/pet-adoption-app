// src/components/Footer.jsx
import React from 'react';
import logo from '../assets/logo.png';


const Footer = ({showLogo, footerText}) => {
    return (
        <footer style={styles.footer}>
            <div style={styles.topStripe}></div>
            <div style={styles.footerContent}>
                {showLogo && <img src={logo} alt="Purrrfect Match Logo" style={styles.logo} />}
                {footerText && <p style={styles.footerText}>{footerText}</p>}
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#E0E9EB',
        height: '18vh',
        width: '100%',
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        zIndex: '1',
    },
    footerContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        zIndex: '2',
    },
    logo: {
        marginTop: '20px',
        height: '20vh',
        zIndex: '3'
    },
    footerText: {
        marginTop: '20px',
        color: 'black',
        zIndex: '3',
        backgroundColor: '#E0E9EB',
    },
    topStripe: {
        backgroundColor: 'black',
        height: '4px',
        width: '100%',
        position: 'absolute',
        bottom: '18vh'
    }
};

export default Footer;
